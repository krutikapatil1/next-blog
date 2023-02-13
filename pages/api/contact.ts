import { MongoClient } from "mongodb";

interface newMessageProps {
  id?: string;
  email: string;
  name: string;
  message: string;
}

const handler = async (req: any, res: any) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newMessage: newMessageProps = {
      email,
      name,
      message,
    };

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.h3k9eua.mongodb.net/${process.env.mongodb_site}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Error conneciton to the db" });
      return;
    }

    const db = client.db("my-site");
    try {
      const result = await db.collection("contact").insertOne(newMessage);
      newMessage.id = result.insertedId.toString();
    } catch (error) {
      res.status(500).json({ message: "Error adding the data to the db" });
    }

    client.close();
    res.status(201).json({ message: "New message added", payload: newMessage });
  }
};

export default handler;

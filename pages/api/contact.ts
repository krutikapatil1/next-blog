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

    try {
      client = await MongoClient.connect(
        "mongodb+srv://nextJsPractice:nextJsPractice34@cluster0.h3k9eua.mongodb.net/my-site?retryWrites=true&w=majority"
      );
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
    console.log(newMessage);
    res.status(201).json({ message: "New message added", payload: newMessage });
  }
};

export default handler;

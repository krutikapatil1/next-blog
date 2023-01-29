import ContactForm from "../components/contact/contact.form";
import Head from "next/head";
import { Fragment } from "react";

const Contact: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me a message" />
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default Contact;

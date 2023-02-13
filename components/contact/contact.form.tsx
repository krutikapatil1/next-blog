import classes from "./contact-form.module.css";
import { useRef, useContext } from "react";
import NotificationContext from "../../store/notification-context";
const ContactForm: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const notificationCtx = useContext(NotificationContext);

  const resetInputValues = () => {
    if (emailRef.current) {
      emailRef.current.value = "";
    }
    if (nameRef.current) {
      nameRef.current.value = "";
    }
    if (messageRef.current) {
      messageRef.current.value = "";
    }
  };

  const sendMessageHandler = (event: any) => {
    event.preventDefault();

    const enteredEmail = emailRef.current?.value;
    const enteredName = nameRef.current?.value;
    const enteredMessage = messageRef.current?.value;

    notificationCtx.showNotification({
      title: "Adding contact...",
      message: "Submitting the new contact!!",
      status: "pending",
    });

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((data) => {
          throw new Error(data.message || "Something went wrong!!");
        });
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "Success",
          message: "Successfully added the new contact!!",
          status: "success",
        });
        resetInputValues();
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: "Error",
          message: error.message || "something went wrong!!",
          status: "error",
        });
      });
  };

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameRef} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows={5} ref={messageRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;

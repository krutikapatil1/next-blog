import classes from "./hero.module.css";
import Image from "next/image";
const Hero: React.FC = () => {
  return (
    <section className={classes.hero}>
      <Image
        className={classes.image}
        src="/images/site/krutika.png"
        alt="Krutika"
        width={300}
        height={200}
      />
      <h1>Hi, I am Krutika</h1>
      <p>
        I blog about web development - especially about the frontend frameworks
        like React and VueJS
      </p>
    </section>
  );
};

export default Hero;

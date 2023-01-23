import React from "react";
import Link from "next/link";
import classes from "./post-item.module.css";
import Image from "next/legacy/image";

interface Post {
  title: string;
  date: string;
  image: string;
  slug: string;
  excerpt: string;
}

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = (props: PostItemProps) => {
  const { title, date, image, slug, excerpt } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            alt={title}
            src={imagePath}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;

import React from "react";
import classes from "./post-grid.module.css";
import PostItem from "./post-item";

interface PostGridProps {
  posts: any;
}

const PostGrid: React.FC<PostGridProps> = (props: PostGridProps) => {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post: any) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostGrid;

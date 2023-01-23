import classes from "./all-posts.module.css";
import PostGrid from "./post-grid";

interface AllPostsProps {
  posts: any;
}

const AllPosts: React.FC<AllPostsProps> = (props: AllPostsProps) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
};

export default AllPosts;

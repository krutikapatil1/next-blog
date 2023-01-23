import PostGrid from "../posts/post-grid";
import classes from "./featured-posts.module.css";

interface FeaturedPostsProps {
  posts: any;
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = (
  props: FeaturedPostsProps
) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;

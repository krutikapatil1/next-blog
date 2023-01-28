import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

interface AllPostsPageProps {
  posts: any;
}

const AllPostsPage: React.FC<AllPostsPageProps> = (
  props: AllPostsPageProps
) => {
  return <AllPosts posts={props.posts} />;
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;

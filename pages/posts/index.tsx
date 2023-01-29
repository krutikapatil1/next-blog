import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";

interface AllPostsPageProps {
  posts: any;
}

const AllPostsPage: React.FC<AllPostsPageProps> = (
  props: AllPostsPageProps
) => {
  return (
    <Fragment>
      <Head>
        <title>All My Posts</title>
        <meta
          name="description"
          content="All My Posts on web development are listed here."
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
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

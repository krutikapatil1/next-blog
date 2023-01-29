import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

interface HomePageProps {
  posts: any;
}

const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Krutika Blog</title>
        <meta
          name="description"
          content="I blog about web development and frontend frameworks. Here is a list of some of the featured posts."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;

import AllPosts from "../../components/posts/all-posts";
const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.webp",
    excerpt:
      "NextJS is a React framework for Production - makes building full stack React app a breeze and ships with SSR.",
    date: "2023-01-22",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.webp",
    excerpt:
      "NextJS is a React framework for Production - makes building full stack React app a breeze and ships with SSR.",
    date: "2023-01-22",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.webp",
    excerpt:
      "NextJS is a React framework for Production - makes building full stack React app a breeze and ships with SSR.",
    date: "2023-01-22",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.webp",
    excerpt:
      "NextJS is a React framework for Production - makes building full stack React app a breeze and ships with SSR.",
    date: "2023-01-22",
  },
];

const AllPostsPage: React.FC = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;

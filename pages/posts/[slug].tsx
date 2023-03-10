import Head from "next/head";
import { Fragment } from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getFileData, getFilesList } from "../../lib/posts-util";

interface PostDetailProps {
  post: any;
}

const PostDetail: React.FC<PostDetailProps> = (props: PostDetailProps) => {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
};

export const getStaticProps = (context: any) => {
  const { params } = context;
  const { slug } = params;

  const postData = getFileData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const filesList = getFilesList();
  const slugs = filesList.map((file) => file.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
};

export default PostDetail;

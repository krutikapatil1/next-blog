import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export const getFileData = (postIdentifier: string) => {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getFilesList = () => {
  return fs.readdirSync(postsDirectory);
};

export const getAllPosts = () => {
  const filesList = getFilesList();

  console.log(filesList);

  const postDataList = filesList.map((file) => {
    return getFileData(file);
  });

  postDataList.sort((a: any, b: any) => (a.date > b.date ? -1 : 1));

  return postDataList;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  return allPosts.filter((post: any) => post.isFeatured);
};

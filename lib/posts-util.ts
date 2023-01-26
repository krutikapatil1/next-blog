import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

const getFileData = (fileName: string) => {
  const filePath = path.join(process.cwd(), postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const postSlug = fileName.replace(/\.md$/, "");

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const filesList = fs.readdirSync(postsDirectory);

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

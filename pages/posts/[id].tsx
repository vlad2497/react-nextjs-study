import { useRouter, NextRouter } from "next/router";
import { useState, useEffect } from "react";
import { NextPageContext } from "next";
import { IPost } from "./../../interfaces/IPost";
import { getDetail } from "./../../externalAPI/posts";

interface IProps {
  post: IPost;
}

const fetchPost = async (id) => {
  const post: IPost = await getDetail(id);
  return post;
};

export default function Post({ post: serverPost }: IProps) {
  const router = useRouter();
  const [post, setPost] = useState<IPost>(serverPost);

  useEffect(() => {
    const fetch = async () => {
      const post: IPost = await fetchPost(router.query.id);
      setPost(post);
    };
    if (!serverPost) fetch();
  }, []);

  if (!post) return <div>Loading...</div>;

  return (
    <>
      <div>ID: {router.query.id}</div>
      <div>Title: {post.title}</div>
      <div>Description: {post.body}</div>
    </>
  );
}

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
  if (!req) return { post: null };
  const post: IPost = await fetchPost(query.id);
  return {
    post,
  };
};

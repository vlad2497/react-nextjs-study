import { NavLayout } from "../../components/NavLayout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IPost } from "./../../interfaces/IPost";
import { getList } from "../../externalAPI/posts";

const fetchPosts = async () => {
  const post: IPost[] = await getList();
  return post;
};

interface IProps {
  posts: IPost[];
}

export default function Posts({ posts: serverPosts }: IProps) {
  const [posts, setPosts] = useState<IPost[]>(serverPosts);

  useEffect(() => {
    const load = async () => {
      const posts: IPost[] = await fetchPosts();
      setPosts(posts);
    };
    if (!serverPosts) load();
  }, []);

  if (!posts) return <div>Loading...</div>;

  return (
    <>
      <NavLayout />
      <div>Posts page</div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

//отрабатывает на front & back, устаревший
/*Posts.getInitialProps = async (context) => {
  //клиентская часть
  if (!context.req) return { posts: null };
  //серверная часть
  const response = await fetch("http://localhost:4200/posts");
  const result = await response.json();
  return {
    posts: result,
  };
};*/

//рекомендованный, отрабатывает только на сервере
export async function getServerSideProps() {
  const posts = await fetchPosts();
  return {
    props: {
      posts,
    },
  };
}

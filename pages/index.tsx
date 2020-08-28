import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Home page</div>
      <br />
      <div>Menu</div>
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </div>
      <div>
        <Link href="/posts/42">
          <a>Post detail</a>
        </Link>
      </div>
    </div>
  );
}

import Head from "next/head";
import React from "react";
import { ArticleList } from "../components/ArticleList";

// import Image from "next/image";
// import SignUp from "./signup";
// import styles from '../styles/Home.module.css'

export default function Home({ articles }) {
  console.log(articles);
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="web-development, programming" />
      </Head>
      <h1 className="text-xl font-bold">Welcome to next</h1>
      <ArticleList articles={articles}></ArticleList>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};

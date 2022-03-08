import React from "react";
import Link from "next/link";

import articleStyles from "../styles/Articles.module.css";
export const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title} &rrr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

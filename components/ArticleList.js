import React from "react";
import { ArticleItem } from "./ArticleItem";
import articleStyles from "../styles/Articles.module.css";
export const ArticleList = ({ articles }) => {
  console.log(articles);
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article}></ArticleItem>
      ))}
    </div>
  );
};

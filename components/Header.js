import headerStyles from "../styles/Header.module.css";
import React from "react";

export const Header = () => {
  return (
    <div>
      <h1 className="title">
        <span>WebDev </span>News
      </h1>
      <style jsx>
        {`
          .title {
            color: red;
          }
        `}
      </style>
    </div>
  );
};

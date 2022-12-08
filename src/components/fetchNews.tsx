import React from "react";
import { useEffect, useState } from "react";
import { SpaceNews } from "../type/index";
import Article from "./ArticleNews";

// in this page we will fetch the articles from the api to display on the main page

export default function News() {
  const [newsArticles, SetNewsArticles] = useState<SpaceNews[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      console.log("--well its already fetching--", response);
      if (response.ok) {
        let data = await response.json();
        console.log("--fetch the data--", data);
        SetNewsArticles(data);
      } else {
        console.log("error from the server");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-around flex-wrap m-5">
        {newsArticles.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleObject } from "../type/index";

const Details = () => {
  const params = useParams();
  console.log(params);
  const [articles, setArticles] = useState<ArticleObject | null>(null);
  const navigate = useNavigate();

  const getArticle = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles/ + params.id"
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setArticles(data);
      } else {
        console.log("Error while getting data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {articles ? (
        <Container>
          <h1>{articles.title}</h1>
          <p>{articles.newsSite}</p>
          <img src={articles.imageUrl} alt="aaa" />
          <p>{articles.summary}</p>
          <Button variant="info" onClick={() => navigate("/")}>
            Home{" "}
          </Button>
        </Container>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Details;

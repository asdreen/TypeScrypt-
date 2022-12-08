import React from "react";
import { Card, Button } from "react-bootstrap";
import { SpaceNews } from "../type";
import { useNavigate } from "react-router-dom";

interface SpaceNewsProps {
  article: SpaceNews;
}

export default function Article({ article }: SpaceNewsProps) {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "16em", background: "cadetblue" }} className="mb-5">
      <Card.Img
        variant="top"
        style={{ height: "10em", objectFit: "cover" }}
        src={article.imageUrl}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{article.title}</Card.Title>
        <Button
          variant="info"
          onClick={() => navigate("/articles/" + article.id)}
        >
          Details
        </Button>
      </Card.Body>
      <p> {article.newsSite}</p>
    </Card>
  );
}

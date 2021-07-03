/** @jsxImportSource @emotion/react */
import React from "react";
import "twin.macro";

import { Container, BigHeading, Heading, Card, Image } from "./styles";

function Posts({ post }) {
  return (
    <Card>
      <Container>
        <BigHeading>{post.slug}</BigHeading>
      </Container>
      <Image
        src={post.imageCollection.items.map((img) => img.url)}
        alt="post"
      />
      <Heading>{post.titlte}</Heading>
    </Card>
  );
}

export default Posts;

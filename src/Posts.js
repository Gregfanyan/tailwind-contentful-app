/** @jsxImportSource @emotion/react */
import React from "react";
import "twin.macro";
import { Container, BigHeading, Heading } from "./styles";

function Posts({ post }) {
  return (
    <div tw="flex flex-col justify-center text-center shadow-2xl items-center w-1/2">
      <Container>
        <BigHeading>{post.slug}</BigHeading>
      </Container>
      <img
        tw="w-3/4 h-2/4 rounded-2xl shadow-2xl"
        src={post.imageCollection.items.map((img) => img.url)}
        alt="post"
      />
      <Heading>{post.titlte}</Heading>
    </div>
  );
}

export default Posts;

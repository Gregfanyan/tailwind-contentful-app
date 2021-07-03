/** @jsxImportSource @emotion/react */
import React from "react";
import "twin.macro";

function Posts({ post }) {
  return (
    <div>
      <div>{post.slug}</div>
      <img src={post.imageCollection.items.map((img) => img.url)} alt="post" />
      <div>{post.titlte}</div>
    </div>
  );
}

export default Posts;

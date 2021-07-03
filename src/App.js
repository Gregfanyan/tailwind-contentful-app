//import React, { useEffect, useState } from "react";
//import { client } from "./Client";
import { useQuery } from "@apollo/client";
import "./App.css";
import "twin.macro";
import { Container, BigHeading } from "./styles";
import { DATA_QUERY } from "./graphql";
import Posts from "./Posts";
import Header from "./Header";

function App() {
  //const [posts, setPosts] = useState();
  const { loading, error, data } = useQuery(DATA_QUERY);

  //fetching rest api

  // useEffect(() => {
  //   client
  //     .getEntries()
  //     .then((res) => setPosts(res.items))
  //     .catch((err) => console.log(err));
  // }, []);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error</p>;
  }

  return (
    <div>
      <Header />
      <Container>
        <BigHeading>Posts</BigHeading>
      </Container>
      {/* 
      {posts &&
        posts.map((post) => (
          <div key={post.fields.slug}>
            <div>{post.fields.slug}</div>
            <img
              src={post.fields.image.map((img) => img.fields.file.url)}
              alt="post"
            />
            <div>{post.fields.titlte}</div>
          </div>
        ))} */}

      {data.containerCollection.items &&
        data.containerCollection.items.map((post, i) => (
          <Posts post={post} key={i} />
        ))}
    </div>
  );
}

export default App;

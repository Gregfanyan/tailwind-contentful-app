/** @jsxImportSource @emotion/react */

import { useQuery } from "@apollo/client";
import "./App.css";
import "twin.macro";
import { Container, BigHeading } from "./styles";
import { DATA_QUERY } from "./graphql";
import Posts from "./Posts";
import Header from "./Header";

function App() {
  const { loading, error, data } = useQuery(DATA_QUERY);

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
      <div tw="flex gap-10 w-full justify-center mr-8 p-6">
        {data.containerCollection.items &&
          data.containerCollection.items.map((post, i) => (
            <Posts post={post} key={i} />
          ))}
      </div>
    </div>
  );
}

export default App;

/** @jsxImportSource @emotion/react */
import { useQuery } from "@apollo/client";
import "twin.macro";

import { Container, BigHeading, CardContainer } from "./components/styles";
import { DATA_QUERY } from "./components/graphql";
import Posts from "./components/Posts";
import Header from "./components/Header";

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
      <CardContainer>
        {data.containerCollection.items &&
          data.containerCollection.items.map((post, i) => (
            <Posts post={post} key={i} />
          ))}
      </CardContainer>
    </div>
  );
}

export default App;

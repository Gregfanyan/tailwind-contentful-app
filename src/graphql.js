import { gql } from "@apollo/client";

export const DATA_QUERY = gql`
  query {
    containerCollection {
      items {
        titlte
        slug
        imageCollection {
          items {
            url
          }
        }
      }
    }
  }
`;

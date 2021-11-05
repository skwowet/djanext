import { gql, useQuery } from "@apollo/client";
import { ALL_BOOKS_QUERY } from "../src/graphql/queries/book";

// export const ALL_BOOKS_QUERY = gql`
//   query {
//     books {
//       id
//       title
//       isbn
//     }
//   }
// `;

function BooksList() {
  const { loading, error, data } = useQuery(ALL_BOOKS_QUERY);

  if (error) return <div>Error loading Boooks.</div>;
  if (loading) return <div>Loading</div>;

  const { books } = data;

  console.log("data", data.books);

  return <h2>Helo {data.books[0].title}</h2>;
}

export default BooksList;
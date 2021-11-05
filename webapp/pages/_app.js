import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import BooksList from "../components/booksLists";

function MyApp({Component, pageProps}) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <div style={{ margin: "20px" }}>
        <Component {...pageProps} />
        <BooksList />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;

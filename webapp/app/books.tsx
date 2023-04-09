"use client";

import { getClient } from "@/lib/get-client";

import { gql, useQuery } from "@apollo/client";

const query = gql`
  query {
    books {
      id
      title
      isbn
    }
  }
`;

export default function Books() {
  const client = getClient();
  const { loading, data } = useQuery(query, { client });
  if (loading) {
    return <p>Loading</p>;
  }

  return <main className="dark:text-white text-black">
    API response: {" "}
    {JSON.stringify(data)}</main>;
}

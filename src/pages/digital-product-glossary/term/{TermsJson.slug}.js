import React from "react";
import { graphql } from "gatsby";
import Menu from "../../../components/menu";
import Navbar from "../../../components/navbar";
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { termsJson } = data; // data.termsJson holds your post data

  return (
    <main>
      <title>A to Z</title>
      <div className="flex bg-light min-h-screen">
        <div className="fixed h-full">
          <Menu />
        </div>
        <div className="flex flex-col pl-24 lg:pl-80 pr-10 lg:pr-20 w-full">
          <Navbar />
          <article className="cms-content max-w-2xl">
            <h1 className="text-3xl text-blue font-serif">{termsJson.title}</h1>
            <div className="py-2">
              <p>{termsJson.description}</p>
              {termsJson.gif && (
                <p>
                  <img src={termsJson.gif} alt={termsJson.title} />
                </p>
              )}
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
export const pageQuery = graphql`
  query ($id: String!) {
    termsJson(id: { eq: $id }) {
      createdAt
      id
      slug
      title
      description
      gif
    }
  }
`;

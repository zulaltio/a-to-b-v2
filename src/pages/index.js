import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Menu from "../components/menu";
import Navbar from "../components/navbar";
import Term from "../components/term";

const IndexPage = () => {
  const termsData = useStaticQuery(graphql`
    {
      allTermsJson(sort: { slug: ASC }) {
        nodes {
          id
          slug
          title
          description
          gif
        }
      }
    }
  `);

  const terms = termsData.allTermsJson.nodes;

  return (
    <main>
      <title>A to Z</title>
      <div className="flex bg-light min-h-screen">
        <div className="fixed h-full">
          <Menu />
        </div>
        <div className="flex flex-col pl-24 lg:pl-80 pr-10 lg:pr-20 w-full">
          <Navbar />
          <h1 className="text-xl font-serif md:text-2xl lg:text-5xl max-w-2xl text-blue pt-10 pb-20">
            We've listed all the
            <span className="font-serif "> terms </span>
            and <span className="font-serif"> definitions </span> that you'll
            want to know about digital products.
          </h1>
          <div>
            {terms.map((term, index) => (
              <Term index={index} term={term} key={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

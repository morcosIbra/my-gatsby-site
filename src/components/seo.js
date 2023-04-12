import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import useSiteMetadata from "../queries/siteTitle";

const Seo = ({ title }) => {
  const { title: siteTitle } = useSiteMetadata();

  return (
    <title>
      {title} | {siteTitle}
    </title>
  );
};

export default Seo;

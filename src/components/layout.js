import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Calistoga&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div style={{ padding: "2rem", maxWidth: "48rem", margin: "0 auto" }}>
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header>
      <h1
        style={{
          fontSize: "5rem",
          lineHeight: ".9",
          textAlign: "center"
        }}
      >
        <span style={{ display: "block" }}>Thanks</span>
        <span style={{ display: "block" }}>giving</span>
      </h1>
    </header>

    <p style={{ fontSize: "1.5rem", marginTop: "4rem" }}>
      This year, Sandy and I are hosting Thanksgiving dinner in our small Los
      Angeles apartment. We'd really love to have you here.
    </p>

    <p style={{ fontSize: "1.5rem", marginTop: "1rem" }}>
      This year, Thanksgiving is on Thursday, November 28. We're going to serve
      dinner around 3 or 4pm and it's going to include all of the hits.
    </p>

    <ul
      style={{
        marginTop: "4rem",
        listStyle: "none",
        paddingLeft: 0,
        fontSize: "2rem",
        textAlign: "center"
      }}
    >
      <li style={{ color: "#FF6600" }}>🦃 The bird</li>
      <li style={{ color: "#FE6700" }}>🐖 HAM</li>
      <li style={{ color: "#FE6900" }}>☁️ Stuffing</li>
      <li style={{ color: "#FB6D00" }}>🧀 Cheesy 'taders</li>
      <li style={{ color: "#F87200" }}>🥔 Some other 'taders</li>
      <li style={{ color: "#F47900" }}>🟢 Frijoles verdes</li>
      <li style={{ color: "#EF8100" }}>🥫 Can shaped cranberry</li>
      <li style={{ color: "#E88B00" }}>🍓 Mushy cranberries</li>
      <li style={{ color: "#DF9600" }}>🥖 Pan</li>
      <li style={{ color: "#D5A200" }}>🧅 Chips n Dip</li>
      <li style={{ color: "#C8AD00" }}>🥂 Bubbly</li>
      <li style={{ color: "#BAB500" }}>🥧 Pie (x2)</li>
      <li style={{ color: "#9AAA00" }}>🍦 w/ the mode</li>
      <li style={{ color: "#799800" }}>☕️ Coffee</li>
    </ul>

    <p style={{ fontSize: "1.5rem", marginTop: "4rem" }}>
      No need to bring anything. We've got it all.
    </p>

    <p style={{ fontSize: "1.5rem", marginTop: "1rem" }}>
      There should be a lot of parking since most likely no one will be Downtown
      (no one is truly from here so they all go back home). Parking is available
      in the front or on the side of the building.
    </p>

    <footer style={{ fontSize: "1.5rem", marginTop: "4rem" }}>
      <address>950 E 3rd St, Los Angeles, CA 90013</address>
    </footer>
  </Layout>
);

export default IndexPage;

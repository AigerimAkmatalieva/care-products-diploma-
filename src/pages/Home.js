import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/header.svg";
// import "./style.css";

function Home() {
  return (
    <>
      <Header
        title="Care Collection"
        image={headerImage}>
      </Header>
    </>
  );
}

export default Home;

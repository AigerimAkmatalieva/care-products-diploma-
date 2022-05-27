import React from "react";
import Header from "../components/Header/Header";
import headerImage from "../assets/hero.png";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";

function Categories() {
  return (
    <>
      <Header 
      title="Find something for younself!" 
      image={headerImage} 
      p="Book a table">
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
        amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
        clita duo justo magna dolore erat amet
      </Header>
      <h1 style={{color: "rgb(236, 141, 15)", textAlign: "center"}}>Most popular items</h1>

      <CategoryList categories={getCategories()} />

    </>
  );
}

export default Categories;
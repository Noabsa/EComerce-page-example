import "./Body.css";
import Card from "./Card";
import { productCards } from "../static/data";
import React, { useState } from "react";

const Body = () => {
  let [search, setSearch] = useState("");
  let resetSearch = (event) => {
    event.preventDefault();
    setSearch(search);
  };
  let handleSearch = (event) => {
    setSearch(event.target.value);
  };
  function printSection(title, content) {
    return (
      <>
        <h3>{title}</h3>
        <div className="products">
          {content.map((element, ind) => (
            <Card data={element} key={ind} />
          ))}
        </div>
      </>
    );
  }

  let filteredData = { data: productCards, title: "OUR PRODUCTS" };
  if (search.toLowerCase() !== "all" && search !== "") {
    filteredData.data = productCards.filter((item) =>
      item.category.toLowerCase().includes(search.toLowerCase())
    );
    filteredData.data.length === 0
      ? (filteredData.title = "NO PRODUCTS FOUND")
      : (filteredData.title = "MATCHED PRODUCTS");
  }

  return (
    <>
      <form onSubmit={resetSearch}>
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search product..."
          value={search}
        ></input>
      </form>
      <section>{printSection(filteredData.title, filteredData.data)}</section>
    </>
  );
};

export default Body;

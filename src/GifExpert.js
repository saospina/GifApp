import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

// const categories = ["on punch man", "mirai niki", "dragon ball"];

export const GifExpert = () => {
  const [categories, setcategories] = useState([]);
  /*  const handleAdd = () => {
    esta es una forma 
    setcategories([...categories, "naruto"]); 
    tambien secategories puede ser un callback
    setcategories((categories) => [...categories, "naruto"]);
  }; */
  return (
    <div>
      <h2>Gif API</h2>
      <hr></hr>
      <br></br>
      <AddCategory setcategories={setcategories} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
// import { getGifs } from "../helpers/getGifs";

const GifGrid = ({ category }) => {
  // data:images- se usa para renombrar
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3> {category.toUpperCase()} </h3>
      <hr></hr>
      {loading && <p className="card-grid loader"></p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
export default GifGrid;

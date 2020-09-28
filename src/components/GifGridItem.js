import React from "react";

export const GifGridItem = ({ title, url }) => {
  // console.log({ id, title, url });
  const titleCapitalized = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <div className="card">
      <p>{titleCapitalized}</p>
      <img src={url} alt={title}></img>
    </div>
  );
};

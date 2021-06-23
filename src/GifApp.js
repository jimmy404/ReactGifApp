import React, { useState } from "react";

import { AddCategory } from "./components/AddCategory";

export const GifApp = () => {
  const [categories, setCategories] = useState([
    "Evangelion",
    "Dragon Ball",
    "Samurai X",
  ]);

  return (
    <div>
      <h2>Gif App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </div>
  );
};

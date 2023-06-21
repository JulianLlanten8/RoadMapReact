import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Dragon Ball",
    "Naruto",
    "Pokemon",
    "Digimon",
    "Yugioh",
    "One Punch",
  ]);

  const handleAdd = () => {
    setCategories(["HunterXHunter", ...categories]);
  };
  return (
    <>
      <h2>GifExpertApp</h2>

      <br />
      <AddCategory setCategories={setCategories} />
      <br />
      <button onClick={handleAdd}>Agregar categoria +</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

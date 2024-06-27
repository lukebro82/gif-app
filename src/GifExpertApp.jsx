import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return; // verifico que no este repetido lo buscado
    setCategories([newCategory, ...categories]);
  };

  const onDeleteCategory = (categoriesToDelete) => {
    setCategories(
      categories.filter((category) => category !== categoriesToDelete)
    );
  };

  return (
    <>
      {/* titulo */}
      <h1>GiftExpertAPP</h1>

      {/* input */}
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {/* Listad de gif */}

      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category}
          onDeleteCategory={onDeleteCategory}
        />
      ))}

      {/* gif item  */}
    </>
  );
};

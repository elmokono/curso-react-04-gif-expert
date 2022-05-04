import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GifExpertApp = () => {

  const initialCategory = [];
  const [categories, setCategories] = useState(initialCategory);

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />{/* <button onClick={handleAdd}>Add Category</button> */}
      <hr />
      <div>
        {
          categories.map((item, index) =>
            //<li key={item}>{item}</li>
            <GifGrid key={item} category={item} />
          )
        }
      </div>
    </>
  );
};

export default GifExpertApp;

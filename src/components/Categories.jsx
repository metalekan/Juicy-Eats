import React from "react";
import { categories } from "../data";

const Categories = () => {

  return (
    <div className="max-w-[1520px] m-auto px-4 py-4">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Trending Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2">
        {categories.map((item) => (
          <div
            key={item.id}
            className="flex p-4 justify-center items-center hover:scale-105 duration-500"
          >
            <img
              className="rounded-xl w-40 h-10 cursor-pointer shadow-xl"
              src={item.image}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

import React, {useState} from "react";
import { categories, mealData } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Meal = () => {
  const [foods, setFoods] = useState(mealData);

  const filterData = (category) => {
    setFoods(
      mealData.filter((item) => {
        return item.category === category;
      })
    )
  }
  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Our Meal
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex justify-center md:justify-center p-2">
          <button onClick={() => setFoods(mealData)} className="px-4 py-2 rounded-xl m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700">All</button>
          <button onClick={() => filterData('pizza')} className="px-4 py-2 rounded-xl m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700">Pizza</button>
          <button onClick={() => filterData('chicken')} className="px-4 py-2 rounded-xl m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700">Chicken</button>
          <button onClick={() => filterData('salad')} className="px-4 py-2 rounded-xl m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700">Salad</button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4 py-8">
        {foods.map((item, index) => (
          <div key={index} className="border-none hover:scale-105 duration-300">
            <img
              className="w-full h-[250px] rounded-lg"
              src={item.image}
              alt={item.name}
            />
            <div className="flex justify-between py-2 px-2">
              <p className="font-bold">{item.name}</p>
              <p className="bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold">{item.price}</p>
            </div>
            <div className="pl-2 py-4 -mt-5">
              <p className="flex items-center gap-2 text-indigo-600">View More <FontAwesomeIcon icon={faArrowRight} /></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;

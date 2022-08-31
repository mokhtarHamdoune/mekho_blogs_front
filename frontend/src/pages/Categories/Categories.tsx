import Card from "components/Card/Card";
import React from "react";
import sport_img from "images/yaron-richman.jpg";

const Categories = () => {
  return (
    <div className="w-3/4 m-auto">
      <h1 className="font-popins text-center text-7xl my-8 uppercase font-bold text-gray-200">
        Categories
      </h1>
      <div className="grid grid-cols-4 gap-6">
        <Card className="group">
          <div className="relative overflow-hidden cursor-pointer">
            <img src={sport_img} alt="tennis racket" />
            <div className="absolute transition-transform ease-in-out duration-300 group-hover:-translate-y-full bg-white/90 p-1">
              <h2 className="text-2xl font-bold uppercase text-center m-0">
                Sports
              </h2>
              <p className="text-md text-justify font-popins">
                Blogs about the recent sports events, latest news and everything
                related to it in general.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Categories;

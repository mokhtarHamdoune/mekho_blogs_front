import React from "react"
import home_intro_1 from "images/intro-1.jpg";
const HomeIntro = ()=>{
    return (
    <div>
      <div className="relative border h-128 bg-fixed flex justify-center items-center" style={{backgroundImage:`url(${home_intro_1})`}} > 
	<h1 className="animate-vshowup w-5/6 text-center text-white text-6xl border-4 p-4 md:p-8 font-bold shadow-xl">HOME OF INTERESTING BLOGS</h1>
      </div>
    </div>
    );
}
export default HomeIntro;

import React, { useState } from "react";
import Logo from "images/logo.svg";
import { Navigation } from "@styled-icons/fluentui-system-filled";
import {
  AppsList,
  ArrowCircleRight,
  DocumentOnePage,
  Home,
  Info,
  StarEmphasis,
} from "@styled-icons/fluentui-system-regular";

import "./header.css";

const Header = () => {
  const [menuVisiblity, setMenuVisiblity] = useState(false);

  return (
    <div className="bg-slate-900">
      <div className="w-full px-2 flex justify-between items-center border-b border-white">
        <Logo className="text-8xl h-14 text-white" />
        <nav className="flex-1 hidden sm:flex flex-row items-center justify-between ml-6">
	  <ul
	    className="text-white px-2 flex flex-row h-14 items-center"
	  >
	    <li className="transition-colors h-full flex items-center hover:bg-orange-500 px-4 ">
	      <a href="#" className="flex items-center">
		<Home size={28} />
		<span className="ml-1"> Home</span>
	      </a>
	    </li>
	    <li className="transition-colors h-full flex items-center hover:bg-orange-500 px-4 ">
	      <a href="#" className="flex items-center">
		<AppsList size={28} /> <span className="ml-1"> Category</span>
	      </a>
	    </li>
	    <li className="transition-colors h-full flex items-center hover:bg-orange-500 px-4 ">
	      <a href="#" className="flex items-center">
		<DocumentOnePage size={28} />{" "}
		<span className="ml-1">Last Blogs</span>
	      </a>
	    </li>
	    <li className="transition-colors h-full flex items-center hover:bg-orange-500 px-4 ">
	      <a href="#" className="flex items-center">
		<StarEmphasis size={28} />{" "}
		<span className="ml-1">Ratings</span>
	      </a>
	    </li>
	    <li className="transition-colors h-full flex items-center hover:bg-orange-500 px-4">
	      <a href="#" className="flex items-center">
		<Info size={28} /> <span className="ml-1">About</span>
	      </a>
	    </li>
	  </ul>
	  <a href="#" className="flex items-center p-2 text-white  rounded-lg transition-colors bg-orange-400 hover:bg-orange-600">
	    <ArrowCircleRight size={28} />{" "}
	    <span className="ml-1">Get Started</span>
	  </a>
      </nav>
<Navigation
          size={32}
	  style={{display:"none"}}
          className="cursor-pointer text-white"
          onClick={() => setMenuVisiblity(!menuVisiblity)}
        />
      </div>
            <nav className="sm:hidden">
        <ul
          className={`text-white text-lg  header-sm-menu ${
            menuVisiblity ? "show-header" : ""
          }`}
        >
          <li className="transition-colors flex items-center hover:bg-orange-500 pl-2 ">
            <a href="#" className="flex items-center">
              <Home size={28} />
              <span className="ml-1"> Home</span>
            </a>
          </li>
          <li className="transition-colors flex items-center hover:bg-orange-500 pl-2 ">
            <a href="#" className="flex items-center">
              <AppsList size={28} /> <span className="ml-1"> Category</span>
            </a>
          </li>
          <li className="transition-colors flex items-center  hover:bg-orange-500 pl-2 ">
            <a href="#" className="flex items-center">
              <DocumentOnePage size={28} />{" "}
              <span className="ml-1">Last Blogs</span>
            </a>
          </li>
          <li className="transition-colors  flex items-center hover:bg-orange-500 pl-2 ">
            <a href="#" className="flex items-center">
              <StarEmphasis size={28} />{" "}
              <span className="ml-1">Ratings</span>
            </a>
          </li>
          <li className="transition-colors  flex items-center hover:bg-orange-500 pl-2">
            <a href="#" className="flex items-center">
              <Info size={28} /> <span className="ml-1">About</span>
            </a>
          </li>
          <li className="transition-colors  flex items-center hover:bg-orange-500 pl-2">
            <a href="#" className="flex items-center">
              <ArrowCircleRight size={28} />{" "}
              <span className="ml-1">Get Started</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  const [isSmWindow, setIsSmWindow] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSmWindow(true);
    }

    const handleResize = () => {
      setIsSmWindow(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white">
      <div className="w-full px-2 flex justify-between items-center border-b border-gray-300">
        <Logo className="text-8xl h-14" />
        <nav className="hidden md:flex flex-row items-center justify-between ml-6">
          <ul className="px-2 font-midium flex flex-row h-14 items-center">
            <li className="transition-colors h-full flex items-center hover:bg-orange-400 hover:text-white px-4 ">
              <a href="#" className="flex items-center">
                <Home size={28} />
                <span className="ml-1"> Home</span>
              </a>
            </li>
            <li className="transition-colors h-full flex items-center hover:bg-orange-400 hover:text-white px-4 ">
              <Link to="/categories" className="flex items-center">
                <AppsList size={28} /> <span className="ml-1">Categories</span>
              </Link>
            </li>
            <li className="transition-colors h-full flex items-center hover:bg-orange-400 hover:text-white px-4 ">
              <a href="#" className="flex items-center">
                <DocumentOnePage size={28} />{" "}
                <span className="ml-1">Last Blogs</span>
              </a>
            </li>
            <li className="transition-colors h-full flex items-center hover:bg-orange-400 hover:text-white px-4 ">
              <Link to="#" className="flex items-center">
                <StarEmphasis size={28} /> <span className="ml-1">Ratings</span>
              </Link>
            </li>
            <li className="transition-colors h-full flex items-center hover:bg-orange-400 hover:text-white px-4">
              <Link to="/about" className="flex items-center">
                <Info size={28} /> <span className="ml-1">About</span>
              </Link>
            </li>
          </ul>
          <Link
            to="/register/signin"
            className="flex items-center p-2 text-white  rounded-lg transition-colors bg-orange-400 hover:bg-orange-600"
          >
            <ArrowCircleRight size={28} />{" "}
            <span className="ml-1">Get Started</span>
          </Link>
        </nav>
        <Navigation
          style={{ display: isSmWindow ? "block" : "none" }}
          size={32}
          className="cursor-pointer"
          onClick={() => setMenuVisiblity(!menuVisiblity)}
        />
      </div>
      <nav className="md:hidden">
        <ul
          className={`text-lg  header-sm-menu ${
            menuVisiblity ? "show-header" : ""
          }`}
        >
          <li className="transition-colors flex items-center hover:bg-orange-400 ihover:text-white pl-2 ">
            <a href="#" className="flex items-center">
              <Home size={28} />
              <span className="ml-1"> Home</span>
            </a>
          </li>
          <li className="transition-colors flex items-center hover:bg-orange-400 hover:text-white pl-2 ">
            <Link to="/categories" className="flex items-center">
              <AppsList size={28} /> <span className="ml-1"> Categories</span>
            </Link>
          </li>
          <li className="transition-colors flex items-center  hover:bg-orange-400 hover:text-white pl-2 ">
            <a href="#" className="flex items-center">
              <DocumentOnePage size={28} />{" "}
              <span className="ml-1">Last Blogs</span>
            </a>
          </li>
          <li className="transition-colors  flex items-center hover:bg-orange-400 hover:text-white pl-2 ">
            <Link to="#" className="flex items-center">
              <StarEmphasis size={28} /> <span className="ml-1">Ratings</span>
            </Link>
          </li>
          <li className="transition-colors  flex items-center hover:bg-orange-400 hover:text-white pl-2">
            <Link to="/about" className="flex items-center">
              <Info size={28} /> <span className="ml-1">About</span>
            </Link>
          </li>
          <li className="transition-colors  flex items-center hover:bg-orange-400 hover:text-white pl-2">
            <a href="/register/signin" className="flex items-center">
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

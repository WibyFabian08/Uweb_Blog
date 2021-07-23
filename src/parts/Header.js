import React, { useState } from "react";
import logo from "../assets/icons/uweb.jpg";
import burger from "../assets/icons/menu.svg";
import search from "../assets/icons/search.svg";
import arrow from "../assets/icons/arrow.svg";
import down from "../assets/icons/down.svg";

import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleShow, setToggleShow] = useState(false);

  const LEFT = toggle ? -40 : -500;
  const RIGHT = toggleSearch ? 20 : -500;
  const HEIGHT = toggleShow ? 260 : 0;

  function sumbit(e) {
    e.preventDefault();

    setToggleSearch(false);

    alert("Haloo");
  }

  return (
    <div className="header relative">
      <div className="w-1/2 flex items-center invisible md:visible relative">
        <div className="w-1/3">
          <Link to="/" className="text-white text-2xl flex">
            <img src={logo} width={30} alt="" />
            <p className="ml-3">Uweb</p>
          </Link>
        </div>
        <div className="w-1/2 flex items-center justify-between">
          <a
            href="/"
            className="text-white hover:underline hover:text-green-300"
          >
            FrontEnd
          </a>
          <a
            href="/"
            className="text-white hover:underline hover:text-green-300"
          >
            BackEnd
          </a>
          <p
            className="text-white"
            style={{ cursor: "pointer" }}
            onClick={() => setToggleShow(!toggleShow)}
          >
            Other
            <span>
              {!toggleShow ? (
                <img
                  src={arrow}
                  className="ml-1 inline-block transition-all duration-300"
                  alt=""
                />
              ) : (
                <img
                  src={down}
                  className="ml-1 inline-block transition-all duration-300"
                  alt=""
                />
              )}
            </span>
          </p>
          <div
            className="bg-gray-500 absolute overflow-hidden rounded-lg flex flex-col top-10 -right-20 transition-all duration-300"
            style={{ width: 200, height: HEIGHT }}
          >
            <a
              href="/"
              className="text-white hover:underline p-5  hover:text-green-300"
            >
              FullStack
            </a>
            <a
              href="/"
              className="text-white hover:underline p-5  hover:text-green-300"
            >
              Traveling
            </a>
            <a
              href="/"
              className="text-white hover:underline p-5  hover:text-green-300"
            >
              Technology
            </a>
            <a
              href="/"
              className="text-white hover:underline p-5  hover:text-green-300"
            >
              Post Article
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex text-right items-center hidden md:block">
        <form onSubmit={sumbit}>
          <input
            type="text"
            placeholder="Search"
            className="outline-none px-6 py-2 text-white rounded-2xl bg-gray-800"
          />
        </form>
      </div>

      <div className="visible md:invisible flex items-center justify-between absolute inset-0">
        <img src={burger} onClick={() => setToggle(!toggle)} alt="" />
        <div className="flex items-center">
          <img src={logo} width={30} alt="" />
          <h2 className="text-white ml-2">Uweb</h2>
        </div>
        <img
          src={search}
          onClick={() => setToggleSearch(!toggleSearch)}
          width={30}
          alt=""
        />
      </div>

      <div
        className="absolute top-16 transition-all duration-300"
        style={{ left: RIGHT }}
      >
        <form onSubmit={sumbit}>
          <input
            type="text"
            placeholder="Search"
            className="outline-none px-6 py-2 text-white rounded-2xl bg-gray-800"
          />
        </form>
      </div>

      <div
        className="slide absolute top-0 flex flex-col  bg-gray-600 z-10 transition-all duration-300"
        style={{ width: 250, height: "100vh", left: LEFT }}
      >
        <div className="ml-auto p-5">
          <img src={burger} onClick={() => setToggle(!toggle)} alt="" />
        </div>
        <div className="flex flex-col p-5 relative h-full">
          <a
            href="/"
            className="text-white hover:underline mb-10 hover:text-green-300"
          >
            FrontEnd
          </a>
          <a
            href="/"
            className="text-white hover:underline mb-10 hover:text-green-300"
          >
            BackEnd
          </a>
          <p
            className="text-white mb-10"
            onClick={() => setToggleShow(!toggleShow)}
          >
            Other
            <span>
              {!toggleShow ? (
                <img
                  src={arrow}
                  className="ml-1 inline-block transition-all duration-300"
                  alt=""
                />
              ) : (
                <img
                  src={down}
                  className="ml-1 inline-block transition-all duration-300"
                  alt=""
                />
              )}
            </span>
          </p>
          <div
            className="bg-gray-300 absolute overflow-hidden rounded-lg flex flex-col top-44 transition-all duration-300"
            style={{ width: 200, height: HEIGHT }}
          >
            <a
              href="/"
              className="text-black hover:underline p-5  hover:text-green-300"
            >
              FullStack
            </a>
            <a
              href="/"
              className="text-black hover:underline p-5  hover:text-green-300"
            >
              Traveling
            </a>
            <a
              href="/"
              className="text-black hover:underline p-5  hover:text-green-300"
            >
              Technology
            </a>
            <a
              href="/"
              className="text-black hover:underline p-5  hover:text-green-300"
            >
              Post Article
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

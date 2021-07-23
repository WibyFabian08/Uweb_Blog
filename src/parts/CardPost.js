import React from "react";
import {Link} from 'react-router-dom'

import Post1 from "../assets/images/post1.png";
import Post2 from "../assets/images/post2.png";
import Post3 from "../assets/images/post3.png";
import Post4 from "../assets/images/post4.png";
import Post5 from "../assets/images/post5.png";
import Post6 from "../assets/images/post6.png";
import user from "../assets/images/me.png";


const CardPost = () => {
  return (
    <div className="mt-10 flex flex-wrap justify-between">
      <div style={{ width: 340 }} className="mb-16 flex flex-col">
        <img src={Post1} className="w-full object-cover rounded-3xl" alt="" />
        <p className="text-gray-400 text-xs mt-5">INTERNET - June 28, 2021</p>
        <Link to="/detail" className="text-white text-2xl mt-3">
          How to design a product that can grow itself 10x in year
        </Link>
        <p className="text-gray-400 text-sm mt-3">
          Auctor Porta. Augue vitae diam mauris faucibus blandit elit per,
          feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia
          dolor.
        </p>
        <div className="flex items-center mt-3">
            <img src={user} className="rounded-full object-cover" width={50} alt="" />
            <div className="flex flex-col ml-3">
                <p className="text-white text-sm">Wiby Fabian Rianto</p>
                <p className="text-gray-400 text-xs">FrontEnd Developer</p>
            </div>
        </div>
      </div>
      <div style={{ width: 340 }} className="mb-16 flex flex-col">
        <img src={Post2} className="w-full object-cover rounded-3xl" alt="" />
        <p className="text-gray-400 text-xs mt-5">INTERNET - June 28, 2021</p>
        <Link to="/detail" className="text-white text-2xl mt-3">
          How to design a product that can grow itself 10x in year
        </Link>
        <p className="text-gray-400 text-sm mt-3">
          Auctor Porta. Augue vitae diam mauris faucibus blandit elit per,
          feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia
          dolor.
        </p>
        <div className="flex items-center mt-3">
            <img src={user} className="rounded-full object-cover" width={50} alt="" />
            <div className="flex flex-col ml-3">
                <p className="text-white text-sm">Wiby Fabian Rianto</p>
                <p className="text-gray-400 text-xs">FrontEnd Developer</p>
            </div>
        </div>
      </div>
      <div style={{ width: 340 }} className="mb-16 flex flex-col">
        <img src={Post3} className="w-full object-cover rounded-3xl" alt="" />
        <p className="text-gray-400 text-xs mt-5">INTERNET - June 28, 2021</p>
        <Link to="/detail" className="text-white text-2xl mt-3">
          How to design a product that can grow itself 10x in year
        </Link>
        <p className="text-gray-400 text-sm mt-3">
          Auctor Porta. Augue vitae diam mauris faucibus blandit elit per,
          feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia
          dolor.
        </p>
        <div className="flex items-center mt-3">
            <img src={user} className="rounded-full object-cover" width={50} alt="" />
            <div className="flex flex-col ml-3">
                <p className="text-white text-sm">Wiby Fabian Rianto</p>
                <p className="text-gray-400 text-xs">FrontEnd Developer</p>
            </div>
        </div>
      </div>
      <div style={{ width: 340 }} className="mb-16 flex flex-col">
        <img src={Post4} className="w-full object-cover rounded-3xl" alt="" />
        <p className="text-gray-400 text-xs mt-5">INTERNET - June 28, 2021</p>
        <Link to="/detail" className="text-white text-2xl mt-3">
          How to design a product that can grow itself 10x in year
        </Link>
        <p className="text-gray-400 text-sm mt-3">
          Auctor Porta. Augue vitae diam mauris faucibus blandit elit per,
          feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia
          dolor.
        </p>
        <div className="flex items-center mt-3">
            <img src={user} className="rounded-full object-cover" width={50} alt="" />
            <div className="flex flex-col ml-3">
                <p className="text-white text-sm">Wiby Fabian Rianto</p>
                <p className="text-gray-400 text-xs">FrontEnd Developer</p>
            </div>
        </div>
      </div>
      <div style={{ width: 340 }} className="mb-16 flex flex-col">
        <img src={Post5} className="w-full object-cover rounded-3xl" alt="" />
        <p className="text-gray-400 text-xs mt-5">INTERNET - June 28, 2021</p>
        <Link to="/detail" className="text-white text-2xl mt-3">
          How to design a product that can grow itself 10x in year
        </Link>
        <p className="text-gray-400 text-sm mt-3">
          Auctor Porta. Augue vitae diam mauris faucibus blandit elit per,
          feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia
          dolor.
        </p>
        <div className="flex items-center mt-3">
            <img src={user} className="rounded-full object-cover" width={50} alt="" />
            <div className="flex flex-col ml-3">
                <p className="text-white text-sm">Wiby Fabian Rianto</p>
                <p className="text-gray-400 text-xs">FrontEnd Developer</p>
            </div>
        </div>
      </div>
      <div style={{ width: 340 }} className="mb-16 flex flex-col">
        <img src={Post6} className="w-full object-cover rounded-3xl" alt="" />
        <p className="text-gray-400 text-xs mt-5">INTERNET - June 28, 2021</p>
        <Link to="/detail" className="text-white text-2xl mt-3">
          How to design a product that can grow itself 10x in year
        </Link>
        <p className="text-gray-400 text-sm mt-3">
          Auctor Porta. Augue vitae diam mauris faucibus blandit elit per,
          feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia
          dolor.
        </p>
        <div className="flex items-center mt-3">
            <img src={user} className="rounded-full object-cover" width={50} alt="" />
            <div className="flex flex-col ml-3">
                <p className="text-white text-sm">Wiby Fabian Rianto</p>
                <p className="text-gray-400 text-xs">FrontEnd Developer</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CardPost;

import React from "react";
import logo from "../assets/pngegg.png";
import { Link } from "react-router-dom";
const HeaderCart = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="flex items-center justify-between container mx-auto space-x-4 p-4">
        <div className="flex max-sm:hidden items-center space-x-1 text-orange-500 font-semibold text-xl">
          <Link to={"/"}>
            <img
              src={logo}
              className="object-cover w-30 cursor-pointer"
              alt=""
            />
          </Link>
          <Link to={"/"}>
            <span className=" max-sm:hidden text-orange-500 text-lg font-normal border-l-2 pl-7">
              Giỏ Hàng
            </span>
          </Link>
        </div>
        <div className=" relative">
          <input
            type="text"
            placeholder="VOUCHER 12%"
            className="w-[621px] border border-orange-500 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button className="absolute right-0 top-0 bottom-0 bg-orange-500 text-white px-4 rounded-r-md">
            🔍
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderCart;

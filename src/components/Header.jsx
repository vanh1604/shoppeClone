import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "../assets/pngegg.png";
import categories from "../MockCategoriesData";
import { CiShoppingCart, CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <div className="container bg-orange-500">
      <div className="flex justify-between pt-1">
        <ul className="flex items-center text-white">
          <li className="border-r-2 border-slate-400 text-[12px] px-2 cursor-pointer hover:opacity-65">
            kênh người bán
          </li>
          <li className="border-r-2 border-slate-400 text-[12px] px-2 cursor-pointer hover:opacity-65">
            Trờ thành Người bán Shoppe
          </li>
          <li className="border-r-2 border-slate-400 text-[12px] px-2 cursor-pointer hover:opacity-65">
            Tải ứng dụng
          </li>
          <li className="text-[12px] ml-2 flex items-center gap-2 cursor-pointer">
            <span>kết nối</span> <FaFacebook size={15} />
            <FaSquareInstagram size={15} />
          </li>
        </ul>
        <ul className="flex gap-2 items-center text-white">
          <li className="flex items-center text-[12px] cursor-pointer hover:opacity-65">
            <IoIosNotificationsOutline size={20} />
            <span>Thông báo</span>
          </li>
          <li className="flex items-center text-[12px] cursor-pointer hover:opacity-65">
            <MdContactSupport />
            <span>Hỗ trợ</span>
          </li>
          <li className="flex gap-2 items-center text-[12px] cursor-pointer hover:opacity-65">
            <AiOutlineGlobal />
            <span>Tiếng Việt</span>
            <MdOutlineKeyboardArrowDown size={20}/>
          </li>
          <li className="border-r-2 border-slate-400 text-[12px] px-2 cursor-pointer hover:opacity-65">
            Đăng ký
          </li>
          <li className=" text-[12px] cursor-pointer hover:opacity-65">
            Đăng nhập
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-5 my-2">
        <div className="w-[20%]">
          <img src={logo} className="object-cover" alt="" />
        </div>
        <div className="relative">
          <input
            type="text"
            className="w-full bg-white p-2 relative"
            placeholder="Shopee bao ship 0Đ - Đăng ký ngay!"
          />
          <button className="absolute w-13 h-7 right-[5px] top-[5px] bottom-[5px] bg-orange-600">
            <CiSearch className="mx-auto text-xl text-white font-semibold" />
          </button>
          <div className="flex gap-5 text-sm font-normal text-white">
            {categories.map((item) => {
              return <div>{item.name}</div>;
            })}
          </div>
        </div>
        <div className="mx-auto p-3">
          <CiShoppingCart size={50} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header;

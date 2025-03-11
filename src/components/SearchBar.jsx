import React from "react";
import logo from "../assets/pngegg.png";
import categories from "../MockCategoriesData";
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const cart = useSelector((state) => state.cart.cart);
  const cartTotalAmount = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );
  return (
    <div className="bg-orange-500">
      {" "}
      <div className="flex items-center bg-orange-500 container mx-auto gap-5 py-2">
        <div className="w-[20%]">
          <Link to={"/"}>
            <img src={logo} className="object-cover cursor-pointer" alt="" />
          </Link>
        </div>
        <div className="relative max-sm:hidden">
          <input
            type="text"
            className="w-full  bg-white p-2 relative"
            placeholder="Shopee bao ship 0Đ - Đăng ký ngay!"
          />
          <button className="absolute w-13 h-7 right-[5px] top-[5px] bottom-[5px] bg-orange-600 cursor-pointer hover:opacity-80">
            <CiSearch className="mx-auto text-xl text-white font-semibold" />
          </button>
          <div className="flex gap-5 text-sm font-normal text-white cursor-pointer">
            {categories.map((item) => {
              return <div key={item.id}>{item.name}</div>;
            })}
          </div>
        </div>
        <div className="mx-auto max-sm:hidden p-3">
          <Link to={`/cart`}>
            <div className="relative">
              <CiShoppingCart size={50} className="text-white cursor-pointer" />
              <div className="absolute w-[24px] text-center top-0 right-[-5px] bg-white text-black rounded-4xl">
                {cartTotalAmount}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

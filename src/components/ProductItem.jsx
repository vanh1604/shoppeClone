import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems } from "../store/cart";
import { Link } from "react-router-dom";
const ProductItem = ({
  price,
  name,
  des,
  rating,
  img,
  location,
  status,
  discount,

  id,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: 0,
  }).format(price);

  return (
    <Link to={`/${id}`}>
      <div className="relative w-full">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="max-w-sm relative w-full overflow-hidden shadow-2xl hover:border-2 hover:border-orange-500 hover:scale-102 transition-transform"
        >
          <div>
            <img
              className="w-full h-80 border-none object-cover"
              src={img[0]}
              alt=""
            />
          </div>
          <div className="p-2 flex flex-col gap-1.5 line-clamp-2 text-ellipsis overflow-hidden">
            <p className="line-clamp-1 overflow-hidden text-ellipsis">{name}</p>
            <div className="flex gap-2 items-center">
              <p className="text-orange-500">
                <span>₫</span>
                {formatPrice}
              </p>
            </div>

            <p className="flex items-center gap-2">
              <span>
                <FaStar className="text-yellow-300" />
              </span>
              {rating}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-slate-600">
                <IoLocationOutline className="mt-1" />
                <p>{location}</p>
              </div>
            </div>
          </div>
        </div>
        {isHovered && (
          <div className="bg-orange-500 scale-102 absolute bottom-[-42px] z-10 text-white text-center py-2 w-full">
            Tìm kiếm sản phẩm tương tự
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductItem;

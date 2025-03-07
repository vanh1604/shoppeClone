import React from "react";
import { FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
const ProductItem = ({
  price,
  name,
  des,
  rating,
  img,
  location,
  status,
  discount,
  note,
}) => {
  const handleStatus = () => {
    if (status) {
      return (
        <span className="bg-orange-500 text-sm font-semibold text-white p-1 rounded">
          {status}
        </span>
      );
    }
  };
  const discountPrice = Math.round(price * (Number(discount) / 100));
  const formatPrice = discountPrice.toFixed(3);
  return (
    <div className="max-w-sm w-full overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300">
      <div>
        <img className="w-full h-80" src={img} alt="" />
      </div>
      <div className="p-2 flex flex-col gap-1.5">
        <p>
          {handleStatus()} {name}
        </p>
        <div className="flex gap-2 items-center">
          <p className="text-orange-500">
            <span>₫</span>
            {formatPrice}
          </p>
          <span className="bg-slate-200 text-sm px-2 front-medium text-orange-500 rounded">
            -{discount}%
          </span>
        </div>
        <p>
          <div className="flex gap-2">
            {note.map((item, index) => {
              return (
                <span
                  key={index}
                  className="text-[12px] text-orange-500 space-x-1"
                >
                  {item}
                </span>
              );
            })}
          </div>
        </p>
        <p className="flex items-center gap-2">
          <span>
            <FaStar className="text-yellow-300" />
          </span>
          {rating}
        </p>
        <div className="flex items-center text-slate-600">
          <IoLocationOutline className="mt-1" />
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

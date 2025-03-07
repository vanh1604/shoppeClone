import React, { useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  const handleStatus = () => {
    if (status) {
      return (
        <span className="bg-orange-500 text-[10px] font-semibold text-white p-1 rounded">
          {status}
        </span>
      );
    }
  };

  const discountPrice = Math.round(price * (Number(discount) / 100));
  const formatPrice = discountPrice.toFixed(3);

  return (
    <div className="relative w-full">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="max-w-sm relative w-full overflow-hidden shadow-2xl hover:border-2 hover:border-orange-500 hover:scale-102 transition-transform"
      >
        <div>
          <img className="w-full h-80 border-none" src={img} alt="" />
        </div>
        <div className="p-2 flex flex-col gap-1.5 line-clamp-2 text-ellipsis overflow-hidden">
          <p className="line-clamp-2 overflow-hidden text-ellipsis">
            {handleStatus()} {des}
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
              {note.map((item, index) => (
                <span
                  key={index}
                  className="text-[12px] text-orange-500 space-x-1"
                >
                  {item}
                </span>
              ))}
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
      {isHovered && (
        <div className="bg-orange-500 scale-102 absolute bottom-[-42px] z-10 text-white text-center py-2 w-full">
          Tìm kiếm sản phẩm tương tự
        </div>
      )}
    </div>
  );
};

export default ProductItem;

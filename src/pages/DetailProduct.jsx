import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import mockData from "../mockData";
import { useDispatch } from "react-redux";
import { addCartItems, updateQuantityItems } from "../store/cart";

const DetailProduct = () => {
  const { id: productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getInfoProduct = () => {
      const infor = mockData.find(
        (item) => Number(item.id) === Number(productId)
      );
      setProductData(infor || {});
    };
    getInfoProduct();
  }, [productId]);

  useEffect(() => {
    if (productData?.quantity) {
      setQuantity(productData.quantity);
    }
  }, [productData]);

  const handleUpdateQuantity = (id, newQuantity) => {
    dispatch(updateQuantityItems({ id, quantity: newQuantity }));
  };

  const increaseQty = () => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      handleUpdateQuantity(productData?.id, newQuantity);
      return newQuantity;
    });
  };

  const decreaseQty = () => {
    setQuantity((prev) => {
      const newQuantity = prev > 1 ? prev - 1 : 1;
      handleUpdateQuantity(productData?.id, newQuantity);
      return newQuantity;
    });
  };

  if (!productData) return <p>Loading...</p>;

  const {
    id,
    name,
    des,
    rating,
    image,
    location,
    price,
    discount,
    bestSeller,
  } = productData;

  const discountPrice = price
    ? Math.round(price - price * (Number(discount) / 100))
    : 0;
  const formatPrice = new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: 0,
  }).format(discountPrice);
  const formatOriginPrice = new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: 0,
  }).format(price);
  const addProductToCart = () => {
    const product = {
      id,
      price: discountPrice,
      name,
      des,
      rating,
      image,
      location,
      discount,
      quantity,
    };
    dispatch(addCartItems(product));
  };

  return (
    <div className="container mx-auto mt-5 p-4 bg-white shadow-lg rounded-lg">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-5">
          <img src={image} alt={name} className="w-full rounded-lg" />
        </div>

        <div className="col-span-7 max-auto">
          <h1 className="text-xl font-bold">{name}</h1>
          <div className="flex items-center space-x-2 my-2">
            <div>
              <span className="underline">{rating}</span>
              <span className="text-yellow-500 text-lg"> ★★★★★</span>
            </div>
            <div className="text-gray-600 underline border-l-1 pl-2">
              {" "}
              2.4k{" "}
            </div>
            <span>Đánh Giá</span>
            <div className="text-gray-600 underline border-l-1 pl-2">
              {" "}
              {bestSeller}{" "}
            </div>
            <span>Sold</span>
          </div>

          <div className="my-2 bg-[#FAFAFA] p-4 flex gap-2">
            <span className="text-red-500 text-2xl font-bold">
              {formatPrice} <span>₫</span>
            </span>
            <span className="text-gray-400 line-through ml-2">{formatOriginPrice}₫</span>
            <span className="text-red-500 ml-2">-{discount}%</span>
          </div>

          <div className="my-8 bg-gray-100 p-2 rounded-lg">
            <p className="text-gray-700">
              Nhận vào hôm nay • Miễn phí vận chuyển
            </p>
            <p className="text-gray-500 text-sm">
              Tặng Voucher 415.000 nếu đơn giao sau thời gian trên.
            </p>
          </div>

          <div className="grid grid-cols-12 my-4">
            <div className="col-span-2 text-slate-400 text-md">Vận chuyển</div>
            <div className="col-span-10 flex items-start">
              <img
                className="mr-2"
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/f1f65ec969d238ed62ff.svg"
                alt=""
              />
              <div className="text-sm space-y-2">
                <p>Nhận từ 14 Th03 - 17 Th03</p>
                <p>Miễn phí vận chuyển</p>
                <p className="text-slate-400">
                  Tặng Voucher ₫15.000 nếu đơn giao sau thời gian trên.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 my-8">
            <div className="col-span-2 text-slate-400 text-md">
              An tâm mua hàng cùng Shopee
            </div>
            <div className="col-span-10 flex items-center space-x-4">
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/fd303700dd252abf3771.svg"
                alt="Shopee Assurance"
                className="h-6"
              />
              <p className="line-clamp-1 overflow-hidden text-ellipsis">
                Trả hàng miễn phí 15 ngày · Chính hãng 100% · Miễn phí vận
                chuyển · Bảo hiểm Thiết bị điện tử
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-gray-700 font-semibold">
              Trả hàng miễn phí 15 ngày • Chính hãng 100%
            </p>
          </div>

          <div className="grid grid-cols-12 items-center my-8 gap-5 ">
            <div className="col-span-2">Số lượng</div>

            <div className="flex col-span-2 items-center border rounded-md ">
              <button className="px-3 py-1 border-r" onClick={decreaseQty}>
                −
              </button>
              <div className="text-center w-24">{quantity}</div>
              <button className="px-3 py-1 border-l" onClick={increaseQty}>
                +
              </button>
            </div>
            <div className="col-span-7 text-slate-400">
              3349 sản phẩm có sẵn
            </div>
          </div>

          <div className="mt-4 flex items-center space-x-4">
            <button
              onClick={addProductToCart}
              className="px-6 py-4 border border-red-500 text-red-500 hover:opacity-85 bg-[#FDF3F4]"
            >
              Thêm Vào Giỏ Hàng
            </button>
            <Link to="/cart">
              <button
                onClick={addProductToCart}
                className="px-12 cursor-pointer hover:opacity-85 py-4 bg-red-600 text-white"
              >
                Mua Ngay
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;

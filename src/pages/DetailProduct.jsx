import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import mockData from "../mockData";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems } from "../store/cart";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { fetchProducts } from "../store/Products";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";

const DetailProduct = () => {
  const { id: productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${productId}`
      );
      setComments(res.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    const getInfoProduct = () => {
      const infor = items.find((item) => Number(item.id) === Number(productId));
      setProductData(infor || {});
    };
    getInfoProduct();
    fetchComments();
    dispatch(fetchProducts());
  }, [productId, dispatch]);

  const increaseQty = () => {
    setAmount((prev) => prev + 1);
  };

  const decreaseQty = () => {
    setAmount((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!productData) return <p>Loading...</p>;

  const { id, title, description, images, price, bestSeller } = productData;

  const formatOriginPrice = new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: 0,
  }).format(price);

  const addProductToCart = () => {
    const product = {
      id,
      price,
      title,
      images,
      quantity: amount,
    };
    dispatch(addCartItems(product));
  };

  return (
    <>
      <Header />
      <SearchBar />
      <div className="container mx-auto mt-5 p-4 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-5">
            <img
              src={images[currentIndex]}
              alt={title}
              className="w-full rounded-lg"
            />
            <div className="flex items-center justify-center gap-4 mt-5">
              <div
                onClick={handlePrev}
                className=" bg-[#C1B9B1] px-1 py-4 text-black"
              >
                <IoIosArrowBack />
              </div>
              {images.map((item, index) => {
                return (
                  <div key={index}>
                    <img
                      className={`w-[120px] h-[120px] object-cover rounded-xl`}
                      src={item}
                      alt=""
                    />
                  </div>
                );
              })}
              <div
                onClick={handleNext}
                className=" bg-[#C1B9B1] px-1 py-4 text-black"
              >
                <IoIosArrowForward />
              </div>
            </div>
          </div>

          <div className="col-span-7 max-auto">
            <h1 className="text-xl font-normal">{title}</h1>
            <div className="flex items-center space-x-2 my-2">
              <div>
                <span className="underline">5.0</span>
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
              <span className="text-orange-500 ml-2">{formatOriginPrice}₫</span>
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
              <div className="col-span-2 text-slate-400 text-md">
                Vận chuyển
              </div>
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
                <div className="text-center w-24">{amount}</div>
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
      <div className="container mx-auto bg-white mt-10">
        <div className="mt-4">
          <p className="bg-[#FAFAFA] p-4 ">CHI TIẾT SẢN PHẨM</p>
        </div>
        <div className="">
          <div className="grid grid-cols-12 p-4">
            <span className="col-span-2">Danh Mục : </span>
            <span className="col-span-10">{productData.category.name}</span>
          </div>
          <div className="grid grid-cols-12 p-4">
            <span className="col-span-2">Số sản phẩm còn lại : </span>
            <span className="col-span-10">2100113</span>
          </div>
          <div className="grid grid-cols-12 p-4">
            <span className="col-span-2">Thương hiệu : </span>
            <span className="col-span-10">{productData.title}</span>
          </div>
          <div className="grid grid-cols-12 p-4">
            <span className="col-span-2">Xuất xứ: </span>
            <span className="col-span-10">Trung Quốc</span>
          </div>
          <div className="grid grid-cols-12 p-4">
            <span className="col-span-2">Gửi từ : </span>
            <span className="col-span-10">Nước ngoài</span>
          </div>
        </div>
        <p className="bg-[#FAFAFA] p-2 m-2">MÔ TẢ SẢN PHẨM</p>
        <p className="p-4 line-clamp-4 grid-cols-2">{description}</p>
        <div className="flex flex-col items-center">
          {images.map((item, index) => {
            return (
              <div key={index}>
                <img className="" src={item} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto bg-white mt-10">
        <p className="p-4 text-2xl">ĐÁNH GIÁ SẢN PHẨM</p>
        {comments.map((item) => {
          return (
            <div
              key={item.id}
              className="border-b-2 border-[#E8E8E8] m-4 p-2 pb-4 space-y-2"
            >
              <div className="flex gap-4 items-center">
                <RxAvatar size={24} />
                <p>{item.name}</p>
              </div>

              <p className="text-slate-400">{item.email}</p>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DetailProduct;

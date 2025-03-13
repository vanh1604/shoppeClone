import React, { useEffect, useMemo, useState } from "react";
import logo from "../assets/pngegg.png";
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchProducts, setCategory } from "../store/Products";

const SearchBar = () => {
  const cart = useSelector((state) => state.cart.cart);
  const { items, status, error } = useSelector((state) => state.products);

  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          "https://api.escuelajs.co/api/v1/categories?limit=10"
        );
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
    dispatch(fetchProducts());
  }, [dispatch]);

  const filterProducts = (id) => {
    navigate(`/${id}`);
    setSearch("");
  };
  const filteredProducts = search
    ? items.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const cartTotalAmount = useMemo(() =>
    cart.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <div className="bg-orange-500">
      <div className="flex items-center bg-orange-500 container mx-auto gap-5 py-2">
        <div className="w-[20%]">
          <Link to={"/"} onClick={() => dispatch(setCategory(""))}>
            <img
              src={logo}
              className="object-cover cursor-pointer"
              alt="logo"
            />
          </Link>
        </div>

        <div className="relative max-sm:hidden">
          <input
            type="text"
            className="w-full bg-white p-2"
            placeholder="Shopee bao ship 0Đ - Đăng ký ngay!"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="absolute w-13 h-7 right-[5px] top-[5px] bottom-[5px] bg-orange-600 cursor-pointer hover:opacity-80">
            <CiSearch className="mx-auto text-xl text-white font-semibold" />
          </button>

          {search && filteredProducts.length > 0 && (
            <div className="absolute top-full z-10 left-0 right-0 bg-white h-[300px] overflow-y-scroll shadow-lg">
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-2 items-center p-2 hover:bg-pink-200 cursor-pointer"
                  onClick={() => filterProducts(item.id)}
                >
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          )}
          <div className="flex gap-5 text-sm font-normal text-white cursor-pointer">
            {categories.map((item) => (
              <div
                key={item.id}
                onClick={() => dispatch(setCategory(item.name))}
              >
                {item.name}
              </div>
            ))}
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

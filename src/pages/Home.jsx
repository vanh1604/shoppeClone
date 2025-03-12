import React, { useEffect, useMemo, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductItem from "../components/ProductItem";
import moment from "moment";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/Products";

const Home = () => {
  const [sortMethod, setsortMethod] = useState("");
  const category = useSelector((state) => state.products.category);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const itemsPerPage = 4;

  const filteredData = useMemo(() => {
    let filtered = [...items];
    if (category) {
      filtered = filtered.filter((item) => item.category.name === category);
    }
    switch (sortMethod) {
      case "ban chay":
        return filtered.sort((a, b) => b.bestSeller - a.bestSeller);
      case "lien quan":
        return filtered.filter((item) => item.rating >= 4.5);
      case "low":
        return filtered.sort((a, b) => a.price - b.price);
      case "high":
        return filtered.sort((a, b) => b.price - a.price);
      case "new":
        return filtered.sort(
          (a, b) =>
            moment(b.updatedAt).valueOf() - moment(a.updatedAt).valueOf()
        );

      default:
        return filtered;
    }
  }, [sortMethod,category, items]);

  const handlePrice = (e) => {
    setsortMethod(e.target.value);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      <Header />
      <SearchBar />
      <div className="container mx-auto">
        <div className="bg-slate-200 flex max-sm:flex-col justify-between items-center p-2">
          <div className="flex gap-4 max-sm:flex-col">
            <p className="p-2 cursor-pointer text-slate-700">Sắp xếp theo</p>
            <p
              onClick={() => {
                setsortMethod("lien quan");
                setCurrentPage(1);
              }}
              className={`p-2 cursor-pointer ${
                sortMethod === "lien quan" ? "bg-orange-500" : "bg-white"
              }`}
            >
              Liên quan
            </p>
            <p
              onClick={() => {
                setsortMethod("new");
                setCurrentPage(1);
              }}
              className={`p-2 cursor-pointer ${
                sortMethod === "new" ? "bg-orange-500" : "bg-white"
              }`}
            >
              Mới nhất
            </p>
            <p
              onClick={() => {
                setsortMethod("ban chay");
                setCurrentPage(1);
              }}
              className={`p-2 cursor-pointer ${
                sortMethod === "ban chay" ? "bg-orange-500" : "bg-white"
              }`}
            >
              Bán chạy
            </p>
            <select
              onChange={handlePrice}
              name="filterPrice"
              className="bg-white p-2 focus:outline-orange-500"
            >
              <option value="low">Giá: Từ thấp đến cao</option>
              <option value="high">Giá: Từ cao đến thấp</option>
            </select>
          </div>
          <div className="flex items-center">
            <p className="mr-2">
              <span className="text-orange-500">{currentPage}</span>/
              {totalPages}
            </p>
            <span onClick={handlePrevPage}>
              <IoIosArrowBack
                className={`bg-slate-300 text-black text-2xl ${
                  currentPage === 1
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }`}
              />
            </span>
            <span onClick={handleNextPage}>
              <IoIosArrowForward
                className={`bg-slate-300 text-black text-2xl ${
                  currentPage === totalPages
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }`}
              />
            </span>
          </div>
        </div>
        <div className="grid mt-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {/* {status === "loading" && <p>Loading...</p>}
          {status === "failed" && <p>Error: {error}</p>} */}
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <ProductItem
                key={item.id}
                name={item.title}
                price={item.price}
                des={item.description}
                img={item.images}
                id={item.id}
              />
            ))
          ) : (
            <p>Không có sản phẩm nào.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

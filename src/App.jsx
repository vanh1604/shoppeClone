import { useState, useMemo, useCallback } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import mockData from "./mockData";
import ProductItem from "./components/ProductItem";
import moment from "moment";

function App() {
  const [status, setStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredData = useMemo(() => {
    let filtered = [...mockData];

    switch (status) {
      case "ban chay":
        return [...filtered].sort((a, b) => b.bestSeller - a.bestSeller);
      case "lien quan":
        return filtered.filter((item) => item.rating >= 4.5);
      case "low":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "high":
        return [...filtered].sort((a, b) => b.price - a.price);
      case "new":
        return [...filtered].sort(
          (a, b) =>
            moment(b.lastUpdated, "YYYY-MM-DD") -
            moment(a.lastUpdated, "YYYY-MM-DD")
        );
      default:
        return filtered;
    }
  }, [status]);

  const handlePrice = useCallback((e) => {
    setStatus(e.target.value);
    setCurrentPage(1);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="container mx-auto">
      <div className="bg-slate-200 flex max-sm:flex-col justify-between items-center p-2">
        <div className="flex gap-4 max-sm:flex-col">
          <p className="p-2 cursor-pointer text-slate-700">Sắp xếp theo</p>
          <p
            onClick={() => {
              setStatus("lien quan");
              setCurrentPage(1);
            }}
            className={`p-2 cursor-pointer ${
              status === "lien quan" ? "bg-orange-500" : "bg-white"
            }`}
          >
            Liên quan
          </p>
          <p
            onClick={() => {
              setStatus("new");
              setCurrentPage(1);
            }}
            className="p-2 cursor-pointer bg-white"
          >
            Mới nhất
          </p>
          <p
            onClick={() => {
              setStatus("ban chay");
              setCurrentPage(1);
            }}
            className={`p-2 cursor-pointer ${
              status === "ban chay" ? "bg-orange-500" : "bg-white"
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
            <span className="text-orange-500">{currentPage}</span>/{totalPages}
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
        {currentItems.map((item, index) => (
          <ProductItem
            key={item.id} // Sử dụng item.id thay vì index
            name={item.name}
            price={item.price}
            des={item.description}
            img={item.image}
            rating={item.rating}
            location={item.loc}
            status={item.status}
            note={item.note}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

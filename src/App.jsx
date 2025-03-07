import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import mockData from "./mockData";
import ProductItem from "./components/ProductItem";

function App() {
  const [data, setData] = useState(mockData);
  const [status, setStatus] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    let filtered = [...data];
    if (status === "ban chay") {
      filtered = filtered.sort(((a, b) => a.bestSeller - b.bestSeller));
    } else if (status === "lien quan") {
      filtered = filtered.filter((item) => item.rating === 4.5);
    } else if (status === "low") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (status === "high") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }
    setFilteredData(filtered);
  }, [status, data]);

  const handlePrice = (e) => {
    setStatus(e.target.value);
  };
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  

  return (
    <>
      <div className="container mx-auto">
        <div className="bg-slate-200 flex max-sm:flex-col justify-between items-center p-2 ">
          <div className="flex gap-4 max-sm:flex-col">
            <p className="p-2 cursor-pointer text-slate-700">Sắp xếp theo</p>
            <p
              onClick={() => {
                setStatus("lien quan");
              }}
              className={`p-2 cursor-pointer  ${
                status === "lien quan" ? "bg-orange-500" : "bg-white"
              } `}
            >
              Liên quan
            </p>
            <p className="p-2 cursor-pointer bg-white">Mới nhất</p>
            <p
              onClick={() => setStatus("ban chay")}
              className={`p-2 cursor-pointer  ${
                status === "ban chay" ? "bg-orange-500" : "bg-white"
              } `}
            >
              Bán chạy
            </p>
            <select
              onChange={handlePrice}
              name="filterPrice"
              id=""
              className="bg-white p-2 focus:outline-orange-500"
            >
              <option value="low">Giá: Từ thấp đến cao</option>
              <option value="high">Giá: Từ cao đến thấp</option>
            </select>
          </div>
          <div className="flex items-center">
            <p className="mr-2">
              <span className="text-orange-500">1</span>/17
            </p>
            <span>
              <IoIosArrowBack className=" bg-slate-300 text-black text-2xl" />
            </span>
            <span>
              <IoIosArrowForward className=" bg-slate-300 text-black text-2xl" />
            </span>
          </div>
        </div>
        <div className="grid mt-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {filteredData.map((item, index) => {
            return (
              <div className="" key={index}>
                <ProductItem
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

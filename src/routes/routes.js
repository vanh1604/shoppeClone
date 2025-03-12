import Cart from "../pages/Cart";
import DetailProduct from "../pages/DetailProduct";
import Home from "../pages/Home";


export const routes = [
  {
    path: "/",
    Page: Home,
    isShowSearchBar:false,
    login:false,
  },
  
  {
    path: "/cart",
    Page: Cart,
    isShowSearchBar:false,
    login:false,
  },
  {
    path:"/:id",
    Page:DetailProduct,
    isShowSearchBar:false,
    login:false,
  }
];
import Cart from "../pages/Cart";
import DetailProduct from "../pages/DetailProduct";
import Home from "../pages/Home";


export const routes = [
  {
    path: "/",
    Page: Home,
    isShowSearchBar:true
  },
  
  {
    path: "/cart",
    Page: Cart,
    isShowSearchBar:false
  },
  {
    path:"/:id",
    Page:DetailProduct,
    isShowSearchBar:true
  }
];
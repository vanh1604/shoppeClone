import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartItem,
  totalPrice,
  updateAddPayment,
  updateQuantityItems,
} from "../store/cart";

const CartItem = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const dispatch = useDispatch();
  const cartPayment = useSelector((state) => state.cart.cartPayment);
  console.log(cartPayment);
  
  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
    handleUpdateQuantity(product.id, quantity + 1);
    cartPayment
  };

  const decreaseQty = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    handleUpdateQuantity(product.id, quantity > 1 ? quantity - 1 : 1);
    console.log(cartPayment);
    
  };

  const handleRemove = (id) => {
    dispatch(deleteCartItem({ id }));
  };
  const handleUpdateQuantity = (id, newQuantity) => {
    dispatch(updateQuantityItems({ id, quantity: newQuantity }));
    console.log(cartPayment);
  };
  const handleAgreeItem = (e) => {
    const isChecked = e.target.checked;
    dispatch(updateAddPayment(isChecked));
    if (isChecked) {
      dispatch(totalPrice(product));
    } else {
      dispatch(totalPrice({ id: product.id }));
    }
  };
  const formatPrice = new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: 0,
  }).format(product.price);
  const priceOfQuantity = new Intl.NumberFormat("vi-VN", {
    minimumFractionDigits: 0,
  }).format(product.price * product.quantity);
  return (
    <div className="grid grid-cols-6 items-center border-b px-4 py-3 gap-4">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          onClick={(e) => handleAgreeItem(e)}
          value={updateAddPayment()}
          className="w-5 h-5"
        />
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 rounded-md object-cover"
        />
      </div>

      <div className="text-center">
        <h3 className="font-semibold">{product.name}</h3>
      </div>

      <div className="text-center">
        <p className="text-lg font-bold text-red-600">{formatPrice}₫</p>
      </div>

      <div className="flex items-center mx-auto border rounded-md w-24">
        <button className="px-3 py-1 border-r" onClick={decreaseQty}>
          −
        </button>
        <span className="text-center w-8">{product.quantity}</span>
        <button className="px-3 py-1 border-l" onClick={increaseQty}>
          +
        </button>
      </div>

      <div className="flex justify-center">
        <p className="text-center font-bold text-red-600 w-24">
          {priceOfQuantity}₫
        </p>
      </div>

      <button
        className="text-red-500 cursor-pointer hover:underline"
        onClick={() => handleRemove(product.id)}
      >
        Xóa
      </button>
    </div>
  );
};

export default CartItem;

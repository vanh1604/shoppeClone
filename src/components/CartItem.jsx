import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../store/cart";

const CartItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  const handleRemove = (id) => {
    dispatch(deleteCartItem({ id }));
  };
  return (
    <div className="grid grid-cols-6 items-center  border-b px-4 py-3 gap-4">
      <div className="flex items-center gap-3">
        <input type="checkbox" className="w-5 h-5" />
        <img
          src={product.img}
          alt={product.name}
          className="w-16 h-16 rounded-md object-cover"
        />
      </div>

      <div className="text-center">
        <h3 className="font-semibold">{product.name}</h3>
      </div>
      <div className="text-center">
        <p className="text-lg font-bold text-red-600">₫{product.price}</p>
      </div>

      <div className="flex items-center mx-auto border rounded-md w-24 ">
        <button className="px-3 py-1 border-r" onClick={decreaseQty}>
          −
        </button>
        <span className="text-center w-8">{quantity}</span>
        <button className="px-3 py-1 border-l" onClick={increaseQty}>
          +
        </button>
      </div>

      <div className="flex justify-center">
        <p className="text-center font-bold text-red-600 w-24">
          ₫{product.price * quantity}
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

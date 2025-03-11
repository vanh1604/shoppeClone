import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import HeaderCart from "../components/HeaderCart";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const cartPayment = useSelector((state) => state.cart.cartPayment);
  const totalAmount = () => {
    if (cartPayment.length > 0) {
      const amount = cartPayment.reduce((iniValue, item) => {
        return iniValue + item.price * item.quantity;
      }, 0);
      const roundedAmount = Math.round(amount);

      return new Intl.NumberFormat("vi-VN", {
        minimumFractionDigits: 0,
      }).format(roundedAmount);
    }
    return "0";
  };
  const handleTotalQuantity = () => {
    if (cartPayment.length > 0) {
      const totalQuantity = cartPayment.reduce((iniValue, item) => {
        return iniValue + item.quantity;
      }, 0);
      return totalQuantity;
    } else {
      return <span>0</span>;
    }
  };
  return (
    <div className="relative">
      <HeaderCart />
      <div className="container mx-auto bg-white p-6 mt-2 shadow-md ">
        <div className="w-full pb-2 text-gray-500">
          <div className="grid grid-cols-6 gap-4 px-4 py-2 font-semibold bg-gray-100 rounded-md border-b">
            <span className="text-left">Sản Phẩm</span>
            <span className="text-center">Tên</span>
            <span className="text-center">Đơn Giá</span>
            <span className="text-center">Số Lượng</span>
            <span className="text-center">Số Tiền</span>
            <span className="text-center">Thao Tác</span>
          </div>

          {cart.length > 0 ? (
            cart.map((item) => <CartItem key={item.id} product={item} />)
          ) : (
            <p className="text-center py-6 text-gray-500">Giỏ hàng trống</p>
          )}
        </div>

        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-600 flex items-center">
          🚚 Giảm ₫300.000 phí vận chuyển đơn tối thiểu ₫0; Giảm ₫500.000 phí
          vận chuyển đơn tối thiểu ₫500.000
          <a href="#" className="text-blue-500 underline ml-1">
            Tìm hiểu thêm
          </a>
        </div>
      </div>
      <div className="container mx-auto sticky bottom-0 bg-white p-6 mt-2 shadow-md">
        <div className="flex justify-between items-center">
          <div className="px-2">
            <div className="text-xl font-semibold">Tổng số tiền thanh toán</div>
            <div className="text-xl text-orange-500 font-bold">{totalAmount()}</div>
          </div>
          <div className="text-xl">Tổng số sản phầm : {handleTotalQuantity()}</div>
          <div>
            <button className="bg-orange-500 p-2 rounded-2xl text-white hover:opacity-85 cursor-pointer">
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

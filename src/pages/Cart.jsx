import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="container mx-auto bg-white p-6 shadow-md">
      <h1 className="text-xl font-semibold mb-4 flex items-center">
        🛒 Giỏ Hàng
      </h1>

      {/* Cart Table */}
      <div className="w-full border-b pb-2 text-gray-500">
        {/* Table Header */}
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
        🚚 Giảm ₫300.000 phí vận chuyển đơn tối thiểu ₫0; Giảm ₫500.000 phí vận
        chuyển đơn tối thiểu ₫500.000
        <a href="#" className="text-blue-500 underline ml-1">
          Tìm hiểu thêm
        </a>
      </div>
    </div>
  );
};

export default Cart;

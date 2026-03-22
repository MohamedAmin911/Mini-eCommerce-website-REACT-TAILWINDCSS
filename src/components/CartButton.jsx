import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CartButton() {
  const navigate = useNavigate();
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  return (
    <button
      type="button"
      onClick={() => navigate("/products/cart")}
      className="relative flex items-center justify-center text-2xl text-slate-900 transition hover:text-emerald-500 active:text-emerald-800"
      aria-label={`Open cart with ${cartCount} items`}
    >
      <FaCartShopping />
      <span className="absolute -right-3 -top-2 min-w-5 rounded-full bg-red-400 px-1.5 py-0.5 text-center text-[11px] font-medium leading-none text-white">
        {cartCount}
      </span>
    </button>
  );
}

export default CartButton;

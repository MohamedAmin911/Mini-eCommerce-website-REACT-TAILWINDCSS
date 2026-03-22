import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
} from "../../redux/reducer";
import CartItem from "./CartItem";
import AppNavbar from "../../components/AppNavbar";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  return (
    <main className="min-h-screen bg-white px-4 py-10 text-slate-900 sm:px-6 lg:px-12">
      <section className="mx-auto max-w-6xl">
        <AppNavbar />
        <div className="flex justify-between">
          <h1 className="text-4xl font-extrabold tracking-tight">Cart</h1>
        </div>

        <div className="mt-12 hidden grid-cols-[1.8fr_1fr_0.6fr_0.5fr] gap-6 border-b border-stone-200 pb-5 text-base font-medium text-stone-500 md:grid">
          <p className="pl-28">Description</p>
          <p className="text-center">Quantity</p>
          <p className="text-center">Remove</p>
          <p className="text-right">Price</p>
        </div>

        <div className="mt-4">
          {cartItems.length === 0 ? (
            <div className="rounded-3xl border border-stone-200 px-6 py-12 text-center text-lg text-stone-500">
              Your cart is empty.
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncreaseQuantity={() => dispatch(increaseQuantity(item.id))}
                onDecreaseQuantity={() => dispatch(decreaseQuantity(item.id))}
                onRemoveItem={() => dispatch(removeProduct(item.id))}
              />
            ))
          )}
        </div>

        <div className="mt-8 flex justify-end">
          <div className="flex w-full max-w-xs items-center justify-between border border-stone-200 bg-white px-6 py-8">
            <span className="text-xl font-medium text-stone-600">Total</span>
            <span className="text-3xl font-semibold tracking-tight">
              &pound;{total.toFixed(2)}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CartPage;

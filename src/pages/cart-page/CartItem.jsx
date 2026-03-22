import { FaMinus, FaPlus, FaXmark } from "react-icons/fa6";

function CartItem({
  item,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveItem,
}) {
  return (
    <article className="grid gap-6 border-b border-stone-200 py-8 md:grid-cols-[1.8fr_1fr_0.6fr_0.5fr] md:items-center">
      <div className="flex items-center gap-5">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center bg-stone-50 p-3">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-contain"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900">{item.name}</h2>
        </div>
      </div>

      <div className="flex items-center md:justify-center">
        <div className="flex overflow-hidden rounded-md border border-stone-200">
          <button
            type="button"
            onClick={onIncreaseQuantity}
            className="flex h-14 w-14 items-center justify-center bg-emerald-900 text-lg text-white transition hover:bg-emerald-800"
            aria-label={`Increase quantity for ${item.name}`}
          >
            <FaPlus />
          </button>
          <span className="flex h-14 w-14 items-center justify-center border-x border-stone-200 text-base font-semibold">
            {item.quantity}
          </span>
          <button
            type="button"
            onClick={onDecreaseQuantity}
            className="flex h-14 w-14 items-center justify-center bg-stone-50 text-base text-stone-500 transition hover:bg-stone-100"
            aria-label={`Decrease quantity for ${item.name}`}
          >
            <FaMinus />
          </button>
        </div>
      </div>

      <div className="flex md:justify-center">
        <button
          type="button"
          onClick={onRemoveItem}
          className="flex h-14 w-14 items-center justify-center border border-stone-200 text-stone-500 transition hover:bg-stone-50 hover:text-slate-900"
          aria-label={`Remove ${item.name} from cart`}
        >
          <FaXmark />
        </button>
      </div>

      <p className="text-3xl font-semibold tracking-tight md:text-right">
        &pound;{(item.price * item.quantity).toFixed(0)}
      </p>
    </article>
  );
}

export default CartItem;

import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const image = product.thumbnail || product.images?.[0];
  const rating = Math.round(product.rating || 0);

  return (
    <article className="rounded-4xl bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <div className="inline-flex rounded-full bg-emerald-500 px-4 py-1 text-xs font-semibold text-white">
        In Stock
      </div>

      <img
        src={image}
        alt={product.title}
        className="mt-4 h-56 w-full rounded-3xl bg-stone-100 object-contain p-4"
      />

      <div className="mt-4 flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold text-slate-900">{product.title}</h3>
        <p className="text-lg font-extrabold text-slate-900">${product.price}</p>
      </div>

      <p className="mt-2 line-clamp-2 text-sm text-stone-500">
        {product.description}
      </p>

      <div className="mt-4 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar
            key={index}
            className={index < rating ? "text-emerald-500" : "text-stone-300"}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => navigate(`/products/${product.id}`)}
        className="mt-5 rounded-full border-2 border-emerald-900 px-5 py-2 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-900 hover:text-white"
      >
        View Details
      </button>
    </article>
  );
}

export default ProductCard;

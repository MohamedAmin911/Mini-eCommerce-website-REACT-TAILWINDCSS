import { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowLeft, FaMinus, FaPlus, FaStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addProduct } from "../../redux/reducer";
import AppNavbar from "../../components/AppNavbar";

function ProductPage() {
  const { product: productId } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${productId}`,
        );
        setProduct(response.data);
        setSelectedImage(
          response.data.images?.[0] || response.data.thumbnail || "",
        );
      } catch (err) {
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      getProduct();
    }
  }, [productId]);

  const rating = Math.round(product?.rating || 0);
  const galleryImages = product?.images?.length
    ? product.images
    : product?.thumbnail
      ? [product.thumbnail]
      : [];
  const previewImage = selectedImage || galleryImages[0] || "";

  const decreaseQuantity = () =>
    setQuantity((current) => Math.max(1, current - 1));
  const increaseQuantity = () => setQuantity((current) => current + 1);

  const handleAddToCart = () => {
    if (!product) {
      return;
    }

    dispatch(
      addProduct({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity,
        image: previewImage,
      }),
    );
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-50 text-lg font-medium text-stone-600">
        Loading product...
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-50 text-lg font-medium text-red-500">
        {error || "Product not found."}
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 px-4 py-8 text-slate-900 sm:px-6 lg:px-10">
      <section className="mx-auto max-w-7xl">
        <AppNavbar />
        <div className="flex items-center justify-between">
          <Link
            to="/products"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition hover:text-slate-900"
          >
            <FaArrowLeft />
            Back to products
          </Link>
        </div>
        <div className="grid gap-10 rounded-4xl bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
          <div>
            <div className="rounded-4xl bg-[#f7f7f5] p-6 sm:p-10">
              <img
                src={previewImage}
                alt={product.title}
                className="mx-auto h-full max-h-115 w-full rounded-3xl object-contain transition duration-300"
              />
            </div>

            <div className="mt-5 flex flex-wrap gap-4">
              {galleryImages.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`rounded-2xl border bg-[#f7f7f5] p-3 transition ${
                    previewImage === image
                      ? "border-emerald-700 shadow-[0_12px_30px_rgba(6,95,70,0.15)]"
                      : "border-transparent hover:border-stone-200"
                  }`}
                  aria-label={`Select product image ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`${product.title} preview ${index + 1}`}
                    className="h-20 w-20 object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center py-2">
            <div className="border-b border-stone-200 pb-7">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                {product.title}
              </h1>
              <p className="mt-3 max-w-md text-sm leading-6 text-stone-500">
                {product.description}
              </p>

              <div className="mt-4 flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1 text-emerald-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar
                      key={index}
                      className={index < rating ? "" : "text-stone-300"}
                    />
                  ))}
                </div>
                <span className="text-stone-500">({product.rating})</span>
              </div>

              <div className="mt-8">
                <p className="text-4xl font-extrabold tracking-tight">
                  ${product.price}
                </p>
                <p className="mt-2 text-base font-semibold text-stone-700">
                  or {(product.price / 5).toFixed(2)}/month
                </p>
                <p className="mt-2 text-sm text-stone-500">
                  Suggested payments with 6 months special financing
                </p>
              </div>
            </div>

            <div className="border-b border-stone-200 py-7">
              <span className="inline-flex rounded-full bg-emerald-600 px-4 py-1 text-sm font-semibold text-white">
                In stock
              </span>

              <div className="mt-6">
                <p className="text-sm font-medium text-stone-700">
                  More information
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <span className="rounded-full bg-stone-100 px-5 py-2 text-sm text-stone-600">
                    {product.category}
                  </span>
                  <span className="rounded-full bg-stone-100 px-5 py-2 text-sm text-stone-600">
                    {product.brand || "Brand"}
                  </span>
                </div>
              </div>
            </div>

            <div className="py-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex w-full max-w-50 items-center justify-between rounded-full bg-stone-100 px-5 py-4">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    className="text-stone-500 transition hover:text-slate-900"
                    aria-label="Decrease quantity"
                  >
                    <FaMinus />
                  </button>
                  <span className="text-lg font-semibold">{quantity}</span>
                  <button
                    type="button"
                    onClick={increaseQuantity}
                    className="text-stone-500 transition hover:text-slate-900"
                    aria-label="Increase quantity"
                  >
                    <FaPlus />
                  </button>
                </div>

                <div className="text-sm">
                  <p className="font-semibold text-stone-700">
                    Only{" "}
                    <span className="text-orange-500">{quantity} Items</span>{" "}
                    Left!
                  </p>
                  <p className="mt-1 text-stone-500">Don&apos;t miss it</p>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  className="w-50 rounded-full bg-emerald-900 px-8 py-2 text-base font-semibold text-white transition hover:bg-emerald-800"
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-50 rounded-full border border-emerald-900 px-8 py-2 text-base font-semibold text-emerald-900 transition hover:bg-emerald-100 active:bg-emerald-950 active:text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;

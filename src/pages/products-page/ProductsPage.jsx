import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import AppNavbar from "../../components/AppNavbar";

function ProductsPage() {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProductsList(response.data.products);
      } catch (err) {
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-50 text-lg font-medium text-stone-600">
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-stone-50 text-lg font-medium text-red-500">
        {error}
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 px-4 py-8 sm:px-6 lg:px-10">
      <section className="mx-auto max-w-7xl">
        <AppNavbar />
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-slate-900">Products</h1>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {productsList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProductsPage;

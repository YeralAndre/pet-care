import { ProductCard } from "@/components/ProductCard";
import products from "@/lib/data/products.json";

export default function ProductsPage() {
  return (
    <section className="my-10">
      <h1 className="text-3xl md:text-4xl text-emerald-500 dark:text-emerald-400">
        Productos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 my-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageUrl="/img/icon.png"
            title={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}

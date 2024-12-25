import { ProductCard } from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Alimento Premium Canino",
    price: 29.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Juguete Interactivo",
    price: 14.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Cama Ortopédica",
    price: 49.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Collar Antipulgas",
    price: 19.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Arena Premium",
    price: 9.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Snacks Naturales",
    price: 7.99,
    image: "/placeholder.svg?height=200&width=200",
  },
];

export default function ProductsPage() {
  return (
    <section className="my-10">
      <h1 className="text-4xl text-emerald-500 dark:text-emerald-400">
        Productos
      </h1>
      <div className="grid grid-cols-3 gap-10 my-10">
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

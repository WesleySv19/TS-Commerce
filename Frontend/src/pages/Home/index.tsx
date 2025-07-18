import { useEffect, useState } from "react"
import { getAllProducts } from "../../services/productService"
import type { Product } from "../../types/product"
import ProductCard from "../../components/ProductCard"

const Home = () => {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        getAllProducts()
        .then(setProducts)
        .catch(console.error)
    })
    
  return (
    <main className="p-8 bg-emerald-800 font-inter">
        <h1 className="text-3xl font-bold text-primary mb-6">Catálogo de produtos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </main>
  )
};

export default Home;
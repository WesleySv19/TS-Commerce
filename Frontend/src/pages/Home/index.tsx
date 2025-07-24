import { useEffect, useState } from "react"
import { getAllProducts } from "../../services/productService"
import type { Product } from "../../types/product"
import ProductCard from "../../components/ProductCard"

import ScrollToTopButton from "../../components/ScrollToTopButton"
import Loader from "../../components/Loader"

const Home = () => {

   const [isLoading, setIsLoading] = useState(true)

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        getAllProducts()
        .then(setProducts)
        .catch(console.error)
        .finally(() => setIsLoading(false))
    })
    
  return (
    <main className="p-8 bg-emerald-800 font-inter">
        <h1 className="text-3xl font-bold text-primary mb-6">Catálogo de produtos</h1>
        {isLoading ? (
            <Loader />
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        )}
        <ScrollToTopButton />
    </main>
  )
};

export default Home;
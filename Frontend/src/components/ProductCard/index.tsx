import type { Product } from "../../types/product"

interface Props {
    product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow hover:shadow-xl transition">
        <img 
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
        />

        <h2 className="text-lg font-semibold">{product.title}</h2>
        <h2 className="text-green-400 font-bold mt-2">{product.price}</h2>
    </div>
  )
};

export default ProductCard;

import type { Product } from "../../types/product"

interface Props {
    product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow hover:shadow-xl transition">
        <img 
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
        />

        <h2 className="text-lg text-gray-200">{product.title}</h2>
        <h2 className="text-green-400 font-bold mt-2">R$ {product.price}</h2>
    </div>
  )
};

export default ProductCard;

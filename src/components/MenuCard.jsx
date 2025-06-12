import { ShoppingCart } from "lucide-react"

const MenuCard = ({ product }) => {
    return (
        <div key={product.id} className="border border-gray-700 group relative bg-black overflow-hidden hover:bg-gray-800 transition-colors">
            {product.onSale && (
                <div className="absolute top-3 left-3 bg-yellow-500 text-black px-2.5 py-1 text-sm font-semibold rounded z-10">
                    Sale
                </div>
            )}

            <div className="aspect-square bg-black relative overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="p-4 border-t border-[gray]">
                <p className="font-semibold mb-2 text-[18px] text-white">{product.name}</p>
                <p className="text-[15px] mb-2 text-gray-500">{product.description}</p>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-500 font-bold text-lg">
                            ${product.price.toFixed(2)}
                        </span>

                        {product.originalPrice && (
                            <span className="text-gray-400 line-through text-sm">
                                ${product.originalPrice.toFixed(2)}
                            </span>
                        )}
                    </div>
                    <div>
                        <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center gap-2">
                            <ShoppingCart className="w-4 h-4" />
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuCard
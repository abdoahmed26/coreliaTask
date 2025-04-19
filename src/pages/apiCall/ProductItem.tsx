import { ProductsType } from "../../types/ProductsType";

const ProductItem = ({item}:{item:ProductsType}) => {
    const complete = Math.trunc(item.rating);
    const incomplete = 5 - complete;
    return (
        <div className="border border-gray-300 rounded-lg bg-white h-fit">
            <img src={item.images[0]} alt={item.title} loading="lazy" className="w-full h-48 object-contain" />
            <div className="p-2 px-3 flex flex-col gap-1">
                <h2 className="text-sm font-semibold">{item.title}</h2>
                <p className="text-sm font-light">{item.description.slice(0, 50)}...</p>
                <div className="flex items-center justify-between">
                    <p className="text-sm font-light text-red-500">${item.price}</p>
                    <div>
                        {
                            Array.from({length: complete}).map((_, index) => (
                                <span key={index} className="text-yellow-400">★</span>
                            ))
                        }
                        {
                            Array.from({length: incomplete}).map((_, index) => (
                                <span key={index} className="text-gray-400">★</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;

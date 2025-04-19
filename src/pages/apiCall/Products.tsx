import { useEffect, useState } from "react";
import { getAllProducts } from "../../utils/getAllProducts";
import { ProductsType } from "../../types/ProductsType";
import Loading from "./Loading";
import ProductItem from "./ProductItem";

const Products = ({search}:{search:string}) => {
    const [data, setData] = useState<ProductsType[]>([]);
    useEffect(() => {
        getAllProducts(setData);
    },[])
    return (
        <div>
            {
                data.length > 0 ? 
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                    {
                        data.map((item, index) => (
                            item.title.toLowerCase().includes(search.toLowerCase()) &&
                            <ProductItem key={index} item={item}/>
                        ))
                    }
                </div>
                : <Loading />
            }
        </div>
    );
}

export default Products;

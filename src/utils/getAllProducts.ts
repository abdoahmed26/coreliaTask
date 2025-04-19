import { ProductsType } from "../types/ProductsType";

export const getAllProducts = (setData: React.Dispatch<React.SetStateAction<ProductsType[]>>)=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setData(data.products))
    .catch(err => console.log(err));
}
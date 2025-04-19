import { IoMdSearch } from "react-icons/io";
import Products from "./Products";
import { useState } from "react";

const APICallMain = () => {
    const [search, setSearch] = useState("");
    return (
        <div className="p-5">
            <h2 className="text-sm font-light">
                <a href="/#" className="underline text-gray-400">Home </a>
                <span className="mx-2 text-gray-400">/</span>
                API
            </h2>
            <div className="mt-10 flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Products</h1>
                    <div className="flex items-center gap-1 bg-white border border-gray-300 w-[200px] rounded-lg px-2 py-1">
                        <IoMdSearch size={18} />
                        <input type="text" onChange={(e) => setSearch(e.target.value)} className="outline-0 w-full" placeholder="search" />
                    </div>
            </div>
            <div className="mt-5">
                <Products search={search} />
            </div>
        </div>
    );
}

export default APICallMain;

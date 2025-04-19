/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { LuDownload } from "react-icons/lu";

const ShowProjects = ({search}:{search:string}) => {
    const [data, setData] = useState([{title:"c1ptest1", client:"ctest1"},{title:"c2ptest1", client:"ctest2"}]);
    useEffect(() => {
        if(typeof window !== "undefined" && window.localStorage){
            const projects = JSON.parse(window.localStorage.getItem("projects") || "[]")
            setData([...data,...projects])
        }
    },[])
    return (
        <div className="mt-5">
            <div className="w-full bg-white border border-gray-200">
                <div className="bg-gray-100 grid grid-cols-6 md:grid-cols-4 xl:grid-cols-3 text-center border-b border-gray-200">
                    <div className="py-3 text-sm font-semibold col-span-1">Title</div>
                    <div className="py-3 text-sm col-span-1">Client</div>
                    <div className="py-3 text-sm col-span-4 md:col-span-2 xl:col-span-1">Action</div>
                </div>
                {data.map((item, index) => (
                    item.title.toLowerCase().includes(search.toLowerCase()) &&
                    <div key={index} className="grid grid-cols-6 md:grid-cols-4 xl:grid-cols-3 border-b border-gray-200">
                        <div className="py-3 text-sm text-center col-span-1">{item.title}</div>
                        <div className="py-3 text-sm text-center col-span-1">{item.client}</div>
                        <div className="py-3 text-sm text-center col-span-4 md:col-span-2 xl:col-span-1">
                            <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-2">
                                <button className="px-3 py-1 cursor-pointer border border-gray-300 rounded-md">Details</button>
                                <button className="px-3 py-1 cursor-pointer border border-gray-300 rounded-md flex items-center gap-1">
                                    <LuDownload /> Download
                                </button>
                                <button className="px-3 py-1 cursor-pointer border border-gray-300 rounded-md">Archive</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShowProjects;

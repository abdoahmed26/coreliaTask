import { useCallback, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import ShowProjects from "./ShowProjects";
import CreateProject from "./CreateProject";

const ProjectsMain = () => {
    const [change, setChange] = useState("active");
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(false);
    const handelChange = useCallback((value: string) => {
        setChange(value);
    }, []);
    return (
        <div className="p-5">
            <h2 className="text-sm font-light">
                <a href="/#" className="underline text-gray-400">Home </a>
                <span className="mx-2 text-gray-400">/</span>
                Projects
            </h2>
            <div className="mt-10 flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Projects</h1>
                <div className="flex items-center gap-1 bg-white border border-gray-300 w-[200px] rounded-lg px-2 py-1">
                    <IoMdSearch size={18} />
                    <input type="text" onChange={(e) => setSearch(e.target.value)} className="outline-0 w-full" placeholder="search" />
                </div>
            </div>
            <div className="mt-5 flex justify-between items-center">
                <div>
                    <button onClick={() => handelChange("active")} className={`px-3 py-1 rounded-l-lg cursor-pointer border ${change === "active" ? "bg-blue-600 text-white border-blue-600" : "bg-white border-gray-300"}`}>Active</button>
                    <button onClick={() => handelChange("archive")} className={`px-3 py-1 rounded-r-lg cursor-pointer border ${change === "archive" ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300"}`}>Archive</button>
                </div>
                <button onClick={() => setShow(true)} className="bg-blue-600 text-white px-4 py-1 cursor-pointer rounded-md">Create Project</button>
            </div>
            <div>
                <ShowProjects search={search} />
            </div>
            <CreateProject setShow={setShow} show={show} />
        </div>
    );
}

export default ProjectsMain;

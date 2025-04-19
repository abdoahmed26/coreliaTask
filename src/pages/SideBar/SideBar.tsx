import { IoClose } from "react-icons/io5";
import ListItems from "./ListItems";

const SideBar = ({open, setOpen}:{open:boolean,setOpen:React.Dispatch<React.SetStateAction<boolean>>}) => {
    return (
        <div className={`bg-white w-56 p-3 fixed h-full ${open ? "left-0" : "left-[-100%]"} md:left-0 top-0 duration-300`}>
            <div className="flex justify-end text-3xl cursor-pointer md:hidden" onClick={() => setOpen(false)}>
                <IoClose />
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl uppercase font-light text-blue-600">
                    corel<span className="lowercase text-green-400">i</span>a
                </h1>
                <h2 className="text-lg text-green-400 pl-2">cyber security</h2>
            </div>
            <div className="mt-10">
                <ListItems />
            </div>
        </div>
    );
}

export default SideBar;

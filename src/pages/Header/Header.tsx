import { IoMdSearch } from "react-icons/io";
import image from "../../assets/img.jpg"
import { PiListBold } from "react-icons/pi";

const Header = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div className="bg-white p-5 py-3 w-full flex justify-between items-center gap-3">
            <div onClick={() => setOpen(true)} className="text-3xl cursor-pointer md:invisible">
                <PiListBold />
            </div>
            <div className="flex justify-between items-center border border-gray-300 w-[250px] md:w-[400px] rounded-lg px-2">
                <input type="text" className="outline-0 py-1 w-full border-r border-gray-300" placeholder="input search text" />
                <span className="py-1 px-2 text-gray-500">
                    <IoMdSearch />
                </span>
            </div>
            <div className="">
                <img src={image} alt="imge" className="w-9 h-9 rounded-lg" />
            </div>
        </div>
    );
}

export default Header;

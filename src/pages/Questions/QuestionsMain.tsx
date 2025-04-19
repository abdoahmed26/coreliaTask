import { IoMdSearch } from "react-icons/io";

const QuestionsMain = () => {
    return (
        <div className="p-5">
            <h2 className="text-sm font-light">
                <a href="/#" className="underline text-gray-400">Home </a>
                <span className="mx-2 text-gray-400">/</span>
                Questions
            </h2>
            <div className="mt-10 flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Questions</h1>
                    <div className="flex items-center gap-1 bg-white border border-gray-300 w-[200px] rounded-lg px-2 py-1">
                        <IoMdSearch size={18} />
                        <input type="text" className="outline-0 w-full" placeholder="search" />
                    </div>
            </div>
            <div className="mt-5 flex justify-between items-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
                repudiandae eos, iste vel tempora quasi consectetur ratione,
                dignissimos consequuntur aperiam tenetur qui. Facere cupiditate, 
                tempora quaerat itaque ipsa natus adipisci.
            </div>
        </div>
    );
}

export default QuestionsMain;


const CreateProject = ({show, setShow}:{show:boolean, setShow:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const handlesSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // console.log(data);
        if(typeof window !== "undefined"){
            const projects = JSON.parse(window.localStorage.getItem("projects") || "[]")
            window.localStorage.setItem("projects", JSON.stringify([...projects, data]))
            window.location.reload();
        }
    }
    return (
        <>
            <div className={`fixed top-0 left-0 z-[99] w-full h-screen bg-black/25 ${show ? "block" : "hidden"}`} onClick={() => setShow(false)}>
            </div>
            <div className={`fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-[100] p-4 bg-white rounded-lg w-[300px] sm:w-[400px] h-fit ${show ? "block" : "hidden"}`}>
                <h2>Create Project</h2>
                <form action="" onSubmit={handlesSubmit}>
                    <div className="mt-5">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required className="w-full border border-gray-300 rounded-lg px-2 py-1 mt-1 outline-0" />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="client">Client</label>
                        <input type="text" id="client" name="client" required className="w-full border border-gray-300 rounded-lg px-2 py-1 mt-1 outline-0" />
                    </div>
                    <div className="flex justify-center">
                        <button className="mt-5 bg-blue-600 text-white cursor-pointer px-4 py-1 rounded-md">Create</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreateProject;

import Sidebar from "./Sidebar"

const Tutor=()=>{
    return (
        <>
        <div className="flex">
            <Sidebar/>
            <div className="w-4/5">
                <h1 className="text-3xl font-normal mt-4 ml-2 mb-4">Tutors Management</h1>
                <hr />
                {/* Search bar */}
                <div className=" w-[100%] flex justify-between items-start p-4">
                        {/* Input on the left */}
                        <input
                            className="border rounded p-2 text-[15px] w-[300px]"
                            type="text"
                            placeholder="Search Tutors"
                        />

                        {/* Buttons on the right */}
                        <div className="flex gap-4">
                            <button className="text-[16px] px-4 py-2 border rounded">
                                Add Tutor
                            </button>
                            <button className="text-[16px] px-4 py-2 border rounded">
                                Remove Tutor
                            </button>
                        </div>
                    </div>
                    <h1 className="text-2xl mt-4 ml-4 mb-2 font-normal">Tutors List</h1>
                    <div className="flex flex-col gap-4">
                        <div className="w-100 h-30">Tutor1</div>
                        <div className="w-100 h-30">Tutor2</div>
                        <div className="w-100 h-30">Tutor3</div>
                    </div>
            </div>
        </div>
        </>
    )

}

export default Tutor
import Sidebar from "./Sidebar";

const Attendance=()=>{
    return (
        <>
        <div className="flex">
           <Sidebar/>
           <div className="w-4/5">
                <h1 className="text-3xl font-normal mt-4 ml-2 mb-4">Attendance Overview</h1>
                <hr />
                {/* Search bar */}
                        <input
                            className="border rounded p-2 m-4 ml-0 text-[15px] w-[300px]"
                            type="text"
                            placeholder="Search Tutors"
                        />
                    <h1 className="text-2xl mt-4 ml-2 mb-2 font-normal">Tutors Attendance List</h1>
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

export default Attendance
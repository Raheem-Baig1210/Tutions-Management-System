import Sidebar from "./Sidebar";

const Students = () => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="w-4/5">
                    <h1 className="text-3xl font-normal mt-4 ml-2 mb-4">Students Overview</h1>
                    <hr />
                    <div className="flex justify-between mt-2">
                        <div>
                            Total Students
                            <br />
                            x
                        </div>
                        <div>Active Students
                            <br />
                            y
                        </div>
                        <div className="mr-4">Total Centers
                            <br />
                            z
                        </div>
                        <div className="mr-4">Total Tutors
                            <br />
                            z1
                        </div>
                    </div>
                    {/* Search bar */}
                        <input
                            className="border rounded p-2 m-4 ml-0 text-[15px] w-[300px]"
                            type="text"
                            placeholder="Search Students"
                        />

                    <h1 className="text-3xl mt-4 ml-1 mb-2 font-normal">Students List</h1>
                    <div className="flex flex-col gap-4">
                        <div className="w-100 h-30">Student1</div>
                        <div className="w-100 h-30">Student2</div>
                        <div className="w-100 h-30">Student3</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Students
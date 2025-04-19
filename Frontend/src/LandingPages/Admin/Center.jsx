import Sidebar from "./Sidebar";
// import { useNavigate } from "react-router-dom";

const Centers = () => {
    // const navigate = useNavigate()
    // const handleLogout = () => {
    //     navigate('/');
    // };
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="">
                    <h1 className="text-3xl font-normal mt-4 ml-2 mb-3">Centers Management</h1>
                    <div className="flex justify-between">
                    <div>
                        Total Centers
                        <br />
                        x
                    </div>
                    <div>Total Tutors
                        <br />
                        y
                    </div>
                    <div>Total Students
                        <br />
                        z
                    </div>
                    </div>
                    <div className="flex justify-around">
                        <input className="border rounded mt-4 p-1 text-[15px] w-[300px]"
                         type="text" placeholder="Search Centers"/>
                        <div className="flex gap-4">
                        <button className="text-[25px] p-3 h-13 m-2 border rounded">Add Center</button>
                        <button className="text-[25px] p-3 h-13 m-2 border rounded">Remove Center</button>
                        </div>
                    </div>
                    
                </div>

            </div>
        </>
    )
}

export default Centers
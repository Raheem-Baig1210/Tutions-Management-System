// import Centers from "./Centers"
import { useNavigate } from "react-router-dom";

const Sidebar=()=>{
    const navigate = useNavigate()
    const handlecenter = () => {
        navigate('/centers');
    };
    const handleDashboard = () => {
        navigate('/admin-dashboard');
    };

    return (
        <>
        <div className="border border-gray-300 w-1/5 h-screen flex flex-col m-2 space-y-2">
        <div className="text-center h-14"  style={{ backgroundColor: "#336699" }}>
            <h1 className="mt-7 text-3xl text-white" style={{ backgroundColor: "#336699" }}>Admin Dashboard</h1>
            </div>
            <hr />
            <button className="text-xl border border-gray-300 ml-4 mr-4 pl-2 rounded text-left cursor-pointer" onClick={handleDashboard}>Dashboard</button>
            <button className="text-lg border border-gray-300 ml-4 mr-4 pl-2 rounded text-left cursor-pointer" onClick={handlecenter}>Centers</button>
            <button className="text-lg border border-gray-300 ml-4 mr-4 pl-2 rounded text-left cursor-pointer">Tutors</button>
            <button className="text-lg border border-gray-300 ml-4 mr-4 pl-2 rounded text-left cursor-pointer">Students</button>
            <button className="text-lg border border-gray-300 ml-4 mr-4 pl-2 rounded text-left cursor-pointer">Attendence</button>
        </div>
        </>
    )
}

export default Sidebar
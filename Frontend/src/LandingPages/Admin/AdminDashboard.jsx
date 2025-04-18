import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        navigate('/');
    };
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="w-4/5">
                    <div className="flex justify-between">
                        <h1 className="text-5xl mt-4 ml-4 mb-2 font-normal">Dashborad</h1>
                        <div className="w-30 text-center" style={{ backgroundColor: "#336699" }}>
                        <button className="mt-4 text-3xl text-white font-normal cursor-pointer" style={{ backgroundColor: "#336699" }} onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                    <hr />
                    <h3 className="text-2xl mt-4 ml-4 mb-2 font-normal">Centers</h3>
                    <div className="flex gap-4">
                        <div className="w-100 h-50">center1</div>
                        <div className="w-100 h-50">center2</div>
                        <div className="w-100 h-50">center3</div>
                    </div>
                    <h3 className="text-2xl mt-4 ml-4 mb-2 font-normal">Tutors Attendence</h3>
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

export default Dashboard

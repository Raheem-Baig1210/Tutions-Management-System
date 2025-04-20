// import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
// import axios from "axios";
// import { useState } from "react";

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
                        <div className="relative w-80 h-70 ">
                            <img src="/media/cntr5.jpg" 
                                alt="Center Image" 
                                className="absolute inset-0 w-full h-full object-cover object-center" />
                            <button className="mt-75 ml-25 hover:bg-gray-300 transition-all duration-250 ease-in-out cursor-pointer border rounded h-10 w-30">Center1</button>
                        </div>
                        <div className="relative w-80 h-70 "><img src="/media/cntr3.jpg" 
                                alt="Center Image" 
                                className="absolute inset-0 w-full h-full object-cover object-center" />
                            <button className="mt-75 ml-25 hover:bg-gray-300 transition-all duration-250 ease-in-out cursor-pointer border rounded h-10 w-30">Center2</button></div>
                        <div className="relative w-80 h-70 "><img src="/media/cntr2.jpg" 
                                alt="Center Image" 
                                className="absolute inset-0 w-full h-full object-cover object-center" />
                            <button className="mt-75 ml-25 hover:bg-gray-300 transition-all duration-250 ease-in-out cursor-pointer border rounded h-10 w-30">center3</button></div>
                    </div>
                    <h3 className="text-2xl mt-20 ml-4 mb-2 font-normal">Tutors Attendence</h3>
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

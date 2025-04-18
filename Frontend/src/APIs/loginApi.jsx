import React, { useEffect, useState } from "react";
import axios from "axios";


const LoginApi = () => {
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5001/admin/login").then((res)=>setData(res.data)).catch((err)=>console.log(err)).finally(()=>setLoading(false))
    },[]);
    return(
        <div>
            <p>API Call</p>
            
        </div>
    )
}

export default LoginApi
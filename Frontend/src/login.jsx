import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    // const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        email:"",
        password:"",
    })
    const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await axios.post('http://localhost:5001/admin/login', formValues);
          navigate("/admin-dashboard")
          console.log(response.data);
        } catch (error) {
          console.error('Error sending data:', error);
        }
      };

    // const handleSubmit  = () => {
    //     if(formValues.email && formValues.password){
    //         // setLoading(true);
    //         <div>
    //             <h1>LoggedIn successfully...!!!!</h1>
    //         </div>
    //     }else{
    //         alert("Please fill all the fields...!!!")
    //     }
    // }

    return (
        <div className="mt-50">
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                    <label
                    htmlFor="floating_email"
                    className="block text-left mb-2 text-xl"
                    >Email address</label>
                    <input 
                    type="email"
                    value={formValues.email}
                    onChange={(e)=>handleInputChange(e)}
                    name="email"
                    id="floating_email"
                    className="block w-full text-left mb-4 p-2 border rounded"
                    placeholder="Email-id"
                    required
                    />
                </div>
                <div className="">
                    <label
                    htmlFor="floating_password"
                    className="block text-left mb-2 text-xl"
                    >Password</label>
                    <input
                    type="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                    name="password"
                    id="floating_password"
                    className="block w-full text-left mb-4 p-2 border rounded"
                    placeholder="Password"
                    required
                    />
                </div>
                <button
                type="submit"
                className="mt-10  w-112 text-white bg-blue-700 hover:bg-blue-1000  font-medium rounded-lg text-sm  px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 "
                >Submit</button>
            </form>
        </div>
    )
}

export default Login
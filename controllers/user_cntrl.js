const user_Mdl = require("../models/user_model")
const { responseGenerator,hashPassword,comparePassword,generateTokens } = require("../utils/util")



const signup =async(req,res) => {
    try {
        const data = req.body
        const allusers = await user_Mdl.find()
        allusers.forEach((val)=>{
            if(val.email===data.email){
                throw new Error("Email Already exist in the list")
            }
        })


        data.password=await hashPassword(data.password)
        const user = new user_Mdl(data)
        await user.save()
        let resp = responseGenerator(true,"User Added succesfully...!!!")
        res.status(200).json(resp)

    } catch (err) {
        console.log(err,"Error in signup ...!!!!")
        if(err.errorResponse.errmsg.includes("duplicate key")){
            res.status(404).json({success:false, message:"Email Already exist. Try with another email...!!!!"})
        }else{
            res.status(404).json({success:false,message:"Internal Server error"})
        }
        
    }
}



const login = async(req,res) => {
    try {
        const {email,password} = req.body
        const user = await user_Mdl.findOne({email}).lean()
        if(user){
            const isPasswordMatches = comparePassword(password,user.password)
            if(isPasswordMatches){
                const tokens = generateTokens({email, name : user.name, id : user.id})
                res.status(200).json({
                    success: true,
                    message : "User LoggedIN successfully ...!!!",
                    data : {
                        name : user.name,
                        id : user.id,
                        tokens
                    }
                })
            }
        }else{
            let resp = responseGenerator(false, "Invalid email or password ...!!!")
            res.status(401).json(resp)
        }
    } catch (err) {
        console.log(err);
        let resp = responseGenerator(false);
        res.status(404).json(resp)
    }
}

// const register = async (req,res) => {
//     try {
//         const data = req.body;
//         const user = new user_Mdl(data);
//         await user.save()
//         let resp = responseGenerator(true, "User Registered Successfully ...!!!!",user);
//         res.status(200).json(user)
//     } catch (err) {
//         console.log(err);
//         let resp = responseGenerator(false);
//         res.status(404).json(resp)
//     }
// }


module.exports = {
    login,
    // register,
    signup
}
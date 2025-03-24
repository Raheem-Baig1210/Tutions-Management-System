const admin_Mdl = require("../models/admin_model")
const user_Mdl = require("../models/user_model")
const { responseGenerator,hashPassword,comparePassword,generateTokens } = require("../utils/util");



const login = async(req,res) => {
    try {
        const { email,password } = req.body;
        const admin = await admin_Mdl.findOne({email}).lean()
        if(admin){
            const isPasswordMatches = comparePassword(password,admin.password);
            if(isPasswordMatches){
                const tokens = generateTokens({email, name:admin.name, id:admin.id,})
                res.status(200).json({
                    message : "Admin LoggedIn sucesscully ...!!!!",
                    success : true,
                    data : {
                        name : admin.name,
                        id : admin.id,
                        tokens
                    }
                })
            }
        }else{
        res.status(401).json({success: false, message: "Invalid email or password ....!!!!"})
        }
    } catch (err) {
        console.log(err)
        let resp = responseGenerator(false);
        res.status(404).json(resp)
    }
}


const getUsersList = async(req,res) => {
    try {
        const users = await user_Mdl.find()
        let resp = responseGenerator(true,"Here is the List of users ...!!!",users)
        res.status(200).json(resp)
    } catch (err) {
        console.log(err);
        let resp = responseGenerator(false);
        res.status(404).json(resp)
    }
}



const register = async(req,res) => {
    try {
        const data = req.body;
        const admin = new admin_Mdl(data);
        await admin.save();
        let resp = responseGenerator(true, "Admin successfully created ...!!!!",admin)
        res.status(200).json(resp)
    } catch (err) {
        console.log(err)
        let resp = responseGenerator(false);
        res.status(404).json(resp)
    }
}

module.exports = {
    register,
    login,
    getUsersList
}
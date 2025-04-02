const admin_Mdl = require("../models/admin_model")
const user_Mdl = require("../models/user_model")
const center_Mdl = require("../models/center_model")
const attend_Mdl = require("../models/attend_model")
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
        const users = await user_Mdl.find().populate("center","center location contact -_id")
        let resp = responseGenerator(true,"Here is the List of users ...!!!",users)
        res.status(200).json(resp)
    } catch (err) {
        console.log(err);
        let resp = responseGenerator(false);
        res.status(404).json(resp)
    }
}


const getusersbyCenterid = async(req,res) => {
    try {
        const c_id = req.params.id;
        const users = await user_Mdl.find({center: c_id}).populate("center","center location contact")
        if(users.length==0){
            let resp = responseGenerator(false,"No users in this center ...!!!!");
            res.status(404).json(resp)
        }
        let resp = responseGenerator(true,"Here is the list of the users of the given centerId...!!!",users)
        res.status(200).json(resp)
    } catch (err) {
        console.log(err);
        let resp = responseGenerator(false);
        res.status(404).json(resp)
    }
}


const deleteUser = async(req,res) => {
    try {
        const user_email = req.body.email
        const user =await user_Mdl.findOne({email:user_email})
        if(user){
            await user_Mdl.deleteOne(user);
            var resp = responseGenerator(true,"User deleted successfully ....!!!", user_Mdl);
            res.status(202).json(resp)
        }else{
            throw new Error("User doesnt exist with this email ...!!!!")
        }
    } catch (err) {
        console.log(err)
        let resp = responseGenerator(false);
        res.status(404).json(resp)
    }
}

const createCenter = async(req,res) => {
    try {
        const data = req.body
        const center = new center_Mdl(data)
        await center.save();
        let resp = responseGenerator(true, "Center created successfully ....!!!", center)
        res.status(200).json(resp)
    } catch (err) {
        console.log(err);
        let resp = responseGenerator(false);
        res.status(404).json(resp)
    }
}


const getallcenters = async(req,res) => {
    try {
        const allCenters = await center_Mdl.find().populate()
        let resp = responseGenerator(true,"Here is the list of centers ...!!!",allCenters)
        res.status(200).json(resp)
    } catch (err) {
        console.log(err);
        let resp = responseGenerator(false);
        res.status(404).json(resp)
    }
}


const attedanceList = async(req,res) => {
    try {
        const attedance = await attend_Mdl.find()
        let resp = responseGenerator(true,"Attendance list ....!!!",attedance)
        res.status(200).json(resp)
    } catch (err) {
        console.log(err)
        let resp = responseGenerator(false);
        res.status(404).json(resp)
    }
}

const attedanceHistory = async(req,res) => {
    try {
        const email = req.body.email
        const history = await attend_Mdl.find({email}).sort({date: 1})
        if(history.length!=0){
            let resp = responseGenerator(true,"Here is the attendance history of the tutor ...!!!",history)
            res.status(200).json(resp)
        }else{
            res.status(200).json("No attendance history of this tutor...!!!")
        }
    } catch (err) {
        console.log(err)
        let resp = responseGenerator(false);
        res.status(404).json(resp)
    }
}


const deleteAttendance = async(req,res) => {
    try {
        const userEmail = req.body.email
        await attend_Mdl.findOneAndDelete({email:userEmail})
        let resp = responseGenerator(true,"Attendance deleted successfully ...!!!!",attend_Mdl)
        res.status(200).json(resp)
    } catch (err) {
        console.log(err)
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
    getUsersList,
    createCenter,
    deleteUser,
    attedanceList,
    attedanceHistory,
    deleteAttendance,
    getallcenters,
    getusersbyCenterid
}
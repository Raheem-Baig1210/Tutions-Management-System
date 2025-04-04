const user_Mdl = require("../models/user_model")
const center_Mdl = require("../models/center_model")
const student_Mdl = require("../models/student_Model")
const attend_Mdl = require("../models/attend_model")
const moment = require("moment")
const { responseGenerator,hashPassword,comparePassword,generateTokens } = require("../utils/util")
const attend_model = require("../models/attend_model")



const signup =async(req,res) => {
    try {
        const data = req.body
        const existingUser = await user_Mdl.findOne({ email: data.email });
        if (existingUser) {
            throw new Error("Email Already exists in the list");
        }

        const centerExists = await center_Mdl.findOne({ center: data.center });
        console.log(centerExists)
        if (!centerExists) {
            throw new Error("Center Doesn't exist...!!! Please contact admin to create center ....!!!!");
        }
        

        data.password=await hashPassword(data.password)
        const user = new user_Mdl(data)
        await user.save()
        let resp = responseGenerator(true,"User Added succesfully...!!!",user)
        res.status(200).json(resp)

    } catch (err) {
        console.log(err,"Error in signup ...!!!!")
        res.status(404).json({success:false,message:"Internal Server error"})
        
        
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



const MarkAttendance = async(req,res) => {
    try {
        const email = req.body.email
        const today = moment().format("YYYY-MM-DD")
        const currentTime = moment().format("HH:MM")

        let attendance = await attend_model.findOne({email,date:today})
        if(attendance){
            let resp = responseGenerator(true,"Already marked today's attendance...!!!")
            res.status(200).json(resp)
        }else{
            const newAttendance = new attend_Mdl({email,date:today,time:currentTime})
            await newAttendance.save()
            let resp = responseGenerator(true,"Attendance marked successfully ...!!!!")
            res.status(201).json(resp)
        }
    } catch (err) {
        console.log(err);
        let resp = responseGenerator(false);
        res.status(404).json(resp)
    }
}



const createStudent = async(req,res) => {
    try {
        const data = req.body
        const student = await student_Mdl.findOne({name:data.name,fname:data.fname})
        if(student){
            throw new Error("Student already exist..!!!")
        }
        const count = await student_Mdl.countDocuments()
        const rollno = count+1
        const newStudent = new student_Mdl({
            ...data,
            rollno
        })
        await newStudent.save()
        let resp = responseGenerator(true,"Student added successfully...!!!!",newStudent)
        res.status(201).json(resp)
    } catch (err) {
        console.log(err);
        let resp = responseGenerator(false);
        res.status(404).json(resp)
    }
}







module.exports = {
    login,
    signup,
    MarkAttendance,
    createStudent
}
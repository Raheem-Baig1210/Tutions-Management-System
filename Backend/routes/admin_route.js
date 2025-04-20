const express = require("express")
const admin_cntrls = require("../controllers/admin_cntrls")
const tutor_cntrl = require("../controllers/tutor_cntrl")
const { upload } = require("../utils/util")
const router = express.Router()
const jwt = require('jsonwebtoken');


let role = false

const isLoggedIn = (req,res,next) => {
    if(req.headers.authorization){
        // console.log(req.headers.authorization);
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,process.env.SECRET_KEY,(err,decode)=>{
            if(err){
                console.log(err)
                res.status(401).send("Please Log in...!!!")
            }else{
                console.log(decode)
                role = true;
                next()
            }
        })
    }
}

const isAdmin = (req,res,next) => {
    if(role){
        console.log("ADMIN")
        next()
    }else{
        res.status(401).send("Unauthorized...!!!")
    }
}





router.post("/register",admin_cntrls.register)
router.post("/login",admin_cntrls.login)
router.get("/dashboard",isLoggedIn,isAdmin,admin_cntrls.dashboard)
router.post("/addCenter",isLoggedIn,isAdmin,upload.array("centerImages",5),admin_cntrls.addCenter)
router.post("/addTutor",isLoggedIn,isAdmin,upload.single("documentPath"),tutor_cntrl.signup)
router.get("/centerByCenterid/:id",isLoggedIn,isAdmin,admin_cntrls.centerByCenterid)
router.get("/getuserbyCenterid/:id",isLoggedIn,isAdmin,admin_cntrls.getusersbyCenterid)
router.get("/getallcenters",isLoggedIn,isAdmin,admin_cntrls.getallcenters)
router.get("/getAllStudents",isLoggedIn,isAdmin,admin_cntrls.allStudents)
router.get("/getAllStudentsAtCenter/:id",isLoggedIn,isAdmin,admin_cntrls.getAllStudentsAtCenter)
router.get("/getAllStudentsByTutorId/:id",isLoggedIn,isAdmin,admin_cntrls.getAllStudentsByTutor)
router.get("/getTutorsList",isLoggedIn,isAdmin,admin_cntrls.getUsersList)
router.delete("/removeUser",isLoggedIn,isAdmin,admin_cntrls.deleteUser)
router.get("/attendanceOfAllStudents",isLoggedIn,isAdmin,tutor_cntrl.attedanceOfAllStudents)
router.get("/attendanceHistoryOfStudent",isLoggedIn,isAdmin,tutor_cntrl.attedanceHistoryOfStudent)
router.get("/attendanceListOfTutor",isLoggedIn,isAdmin,admin_cntrls.attedanceList)
router.get("/attendanceHistoryOfTutor",isLoggedIn,isAdmin,admin_cntrls.attedanceHistory)
router.delete("/deleteAttendance",isLoggedIn,isAdmin,admin_cntrls.deleteAttendance)


module.exports=router
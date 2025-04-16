const express = require("express")
const tutor_ctrl = require("../controllers/tutor_cntrl")

const router = express.Router()


const isLoggedIn = (req,res,next) => {
    if(req.headers.authorization){
        console.log(req.headers.authorization);
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,process.env.SECRET_KEY,(err,decode)=>{
            if(err){
                console.log(err)
                res.status(401).send("Please Log in...!!!")
            }else{
                console.log(decode)
                req.role = 2;
                next()
            }
        })
    }
}

const isAdmin = (req,res,next) => {
    if(req.role === 1){
        console.log("ADMIN")
        next()
    }else{
        res.status(401).send("Unauthorized...!!!")
    }
}



// router.post("/signup",tutor_ctrl.signup)
router.post("/login",tutor_ctrl.login)
router.post("/markAttedance",isLoggedIn,tutor_ctrl.MarkAttendance)
router.post("/addStudent",isLoggedIn,tutor_ctrl.createStudent)
router.post("/markStudentAttendance",isLoggedIn,tutor_ctrl.StudentAttendance)
router.get("/attendaceOfAllStudents",isLoggedIn,tutor_ctrl.attedanceOfAllStudents)
router.get("/attendanceHistoryOfStudent",isLoggedIn,tutor_ctrl.attedanceHistoryOfStudent)
// router.post("/attendance",tutor_ctrl.attendence)

// router.post("/register",tutor_ctrl.register)


module.exports = router
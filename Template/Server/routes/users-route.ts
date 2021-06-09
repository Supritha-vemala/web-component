import express from "express";

const router = express.Router();
import {registerUser,loginUser} from "../controllers/users-controller"

router.post('/register',(req,res)=>{
    registerUser(req,res)
})


router.post("/login",(req,res)=>{
    loginUser(req,res)
})

export default router
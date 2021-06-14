import express from "express";

const router = express.Router();
import {registerUser,loginUser,addBookMark, checkAuthoraiztion} from "../controllers/users-controller"

router.post('/register',(req,res)=>{
    registerUser(req,res)
})


router.post("/login",(req,res)=>{
    loginUser(req,res)
})

router.patch("/addBookmark/:imdbid",checkAuthoraiztion,(req,res)=>{
    addBookMark(req,res)
})
export default router
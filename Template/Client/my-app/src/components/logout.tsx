import { Alert } from "@material-ui/lab";
import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { LOGGED_OUT } from "../store/constants";

interface Props {}

export default function Logout({}: Props) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type:LOGGED_OUT})
    })
  return (
    <Alert severity="success" style={{width:"40vw",marginLeft:"30vw"}}>Logout successful</Alert>
  );
}

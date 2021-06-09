import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
interface Props{

}
export default function Header(props:Props) {
  const state = useSelector((state:any) => state.user)
  // useEffect(() => {
  //   console.log(state.activeUser)
  // }, [state.activeUser])
  console.log(state.activeUser)
  return (
    <div className="header">
        <h2 style={{display:"inline-block",margin:"1vw",marginTop:"3vw"}}>Query clarify</h2>
      <div className="navGroup">
        <Link className="navLink" to="/">
          Home
        </Link>
       {state.activeUser===null?<Link className="navLink" to="/login">Login</Link>:<Link className="navLink" to="/logout">Logout</Link>}
        <Link className="navLink" to="/register">
          Regsiter
        </Link>
      </div>
    </div>
  );
}

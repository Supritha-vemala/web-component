import {  useState } from "react";
import {  useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import UserMenu from "./userMenu";
interface Props {}
export default function Header(props: Props) {
  const state = useSelector((state: any) => state.user);
  const history = useHistory();
  const [Search, setSearch] = useState("");
  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  const checkIfEnter = async (e: any) => {
    if (e.key=== 'Enter') {
      if (Search.split("")[0] === "t" && Search.split("")[1] === "t") {
        history.push("/movies/"+Search);
      } else {
        history.push("/search?q="+Search);
      }
      setSearch("")
    }
  };
  return (
    <div className="header">
      <h2 style={{ display: "inline-block", margin: "1vw", marginTop: "3vw" }}>
        Movie BUzzz
      </h2>
      <input
        type="text"
        style={{ marginLeft: "10%", width: "40%" }}
        placeholder="search"
        onChange={handleChange}
        onKeyPress={checkIfEnter}
        value={Search}
      ></input>
      <div className="navGroup">
        <Link className="navLink" to="/">
          Home
        </Link>
        {state.activeUser === null ? (
          <>
          <Link className="navLink" to="/login">
            Login
          </Link>
           <Link className="navLink" to="/register">
           Regsiter
         </Link>
         </>
        ) : (
          <UserMenu></UserMenu>
        )}
       
      </div>
    </div>
  );
}

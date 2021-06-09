import axios from "axios";
import { LOGGED_IN } from "../store/constants";
const loginUser = async (data: any,dispatch:any) => {
  try {
    let response = await axios.post(
      "http://localhost:5000/api/users/login",
      JSON.stringify(data),
      { headers: { "Content-Type": "application/json" } }
    );
    dispatch({ type: LOGGED_IN, payload: response.data });
	return response
  } catch (err) {
    return err;
  }
};

const signupUser = async (data: any) => {
  try {
    let response = await axios.post(
      "http://localhost:5000/api/users/register",data);
    return response;
  } catch (err) {
    return err;
  }
};

export { loginUser, signupUser };

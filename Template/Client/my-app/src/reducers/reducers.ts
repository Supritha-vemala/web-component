import { LOGGED_IN, LOGGED_OUT } from "../store/constants";

const initialStateOfUser = {
  activeUser: null,
  userProfile: [],
};
const userReducer = (currentState = initialStateOfUser, action: any): any => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...currentState,
        activeUser: action.payload,
      };
    case LOGGED_OUT:
      return {
        ...currentState,
        activeUser: null,
      };
    default:
      return currentState;
  }
};

export { userReducer };

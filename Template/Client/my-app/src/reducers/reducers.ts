import { ADD_BOOKMARK, LOGGED_IN, LOGGED_OUT, TOP_MOVIES} from "../store/constants";

interface initialStateOfUser{
  activeUser: any,
  userProfile:[],
}
const initialStateOfUser:initialStateOfUser = {
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
      case ADD_BOOKMARK:
        currentState.activeUser.user.bookmarks.push(action.payload)
        return {
          ...currentState,
          activeUser:{
            ...currentState.activeUser,
            user:{
              ...currentState.activeUser.user,
              bookmarks:currentState.activeUser.user.bookmarks
            }
          }
        }
        
    default:
      return currentState;
  }
};

const initialStateOfMovies = {
  topMovies: []
};
const movieReducer = (
  currentState = initialStateOfMovies,
  action: any
): any => {
  switch (action.type) {
    case TOP_MOVIES:
      return {
        ...currentState,
        topMovies: action.payload,
      };
    default:
      return currentState;
  }
};

export { userReducer, movieReducer };

import { combineReducers } from "redux";
import { BurgerReducer } from "./BurgerReducer";
const rootReducer = combineReducers({
  //store tổng của ứng dụng
  BurgerReducer,
});

export default rootReducer;

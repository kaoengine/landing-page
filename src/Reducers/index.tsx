import { combineReducers } from "redux";
import API from "./API";
import CustomerInfo from "./CustomerInfo";
import CustomerContact from "./CustomerContact";
export default combineReducers({
  API,
  CustomerInfo,
  CustomerContact,
});

import { combineReducers } from "redux";
import API from "./API";
import CustomerInfo from "./CustomerInfo";
import CustomerContact from "./CustomerContact";
import PurchaseApp from "./PurchaseApp";
export default combineReducers({
  API,
  CustomerInfo,
  CustomerContact,
  PurchaseApp,
});

import {
  FETCH_API,
  REQUESTED_API,
  REQUESTED_API_SUCCEEDED,
  REQUESTED_API_FAILED,
  ADD_INFO,
  FETCH_VIDEO,
  ADD_CONTACT,
  PURCHASE_BY_ID,
} from "./Type";

export const FetchApi = () => {
  return {
    type: FETCH_API,
  };
};

export const RequestedAPI = () => {
  return {
    type: REQUESTED_API,
    loading: false,
  };
};
export const RequestAPISuccess = (data: any, id: any) => {
  return {
    type: REQUESTED_API_SUCCEEDED,
    url: data.url,
    id,
  };
};

export const RequestAPIFailed = () => {
  return {
    type: REQUESTED_API_FAILED,
  };
};

export const AddInfo = (data: any) => {
  return {
    type: ADD_INFO,
    data,
  };
};

export const FetchVideo = (isDisplay: any) => {
  return {
    type: FETCH_VIDEO,
    isDisplay,
  };
};

export const AddContact = (
  name: any,
  email: any,
  phone: any,
  company: any,
  message: any
) => {
  return {
    type: ADD_CONTACT,
    name,
    email,
    phone,
    company,
    message,
  };
};

export const PurchaseById = () => {
  return {
    type: PURCHASE_BY_ID,
  };
};

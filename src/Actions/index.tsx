export const FetchApi = () => {
  return {
    type: "FETCH_API",
  };
};

export const RequestedAPI = () => {
  return {
    type: "REQUESTED_API",
    loading: false,
  };
};
export const RequestAPISuccess = (data: any, id: any) => {
  return {
    type: "REQUESTED_API_SUCCEEDED",
    url: data.url,
    id,
  };
};

export const RequestAPIFailed = () => {
  return {
    type: "REQUESTED_API_FAILED",
  };
};

export const AddInfo = (data: any) => {
  return {
    type: "ADD_INFO",
    data,
  };
};

export const FetchVideo = (isDisplay: any) => {
  return {
    type: "FETCH_VIDEO",
    isDisplay,
  };
};

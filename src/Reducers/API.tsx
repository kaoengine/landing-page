const API = (state = { loading: true }, action: any) => {
  switch (action.type) {
    case "FETCH_API":
      return { ...state, loading: true };

    case "REQUESTED_API":
      return { ...state, loading: false, url: "" };

    case "REQUESTED_API_SUCCEEDED":
      return {
        ...state,
        url: action.url,
        id: action.id,
        loadding: false,
        error: false,
      };

    case "REQUESTED_API_FAILED":
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};
export default API;

const initialState = { isDisplay: false };

const API = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_VIDEO":
      return {
        ...state,
        isDisplay: !action.isDisplay,
        url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      };
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
      return { ...state };
  }
};
export default API;

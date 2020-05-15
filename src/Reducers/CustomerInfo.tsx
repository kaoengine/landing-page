const CustomerInfo = (state = { emailSubcribe: "" }, action: any) => {
  switch (action.type) {
    case "ADD_INFO":
      return { ...state, emailSubribe: action.data };

    default:
      return state;
  }
};

export default CustomerInfo;

let initialState = [{ email: [] }];
const CustomerInfo = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_INFO":
      return [...state, { email: action.data }];

    default:
      return state;
  }
};

export default CustomerInfo;

const initialState = { id: 0 };

const PurchaseApp = (state = initialState, action: any) => {
  switch (action.type) {
    case "PURCHASE_BY_ID_ASYNC":
      return {
        id: state.id + action.value,
      };

    default:
      return { ...state };
  }
};

export default PurchaseApp;

let initialState = [{}];

const CustomerContact = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [
        ...state,
        {
          name: action.name,
          email: action.email,
          phone: action.phone,
          company: action.company,
          message: action.message,
        },
      ];

    default:
      return [...state];
  }
};
export default CustomerContact;

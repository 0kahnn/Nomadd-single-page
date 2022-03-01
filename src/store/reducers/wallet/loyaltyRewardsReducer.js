const initState = {
  isLoading: false,
  id: null,
  userName: "",
  emailAddress: "",
  profileImage: null,
  title: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  nationality: "",
  city: "",
  lvcLocked: null,
};
const loyaltyRewardsReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOYALTY_REWARDS_LOADING":
    case "WALLET_LOADING":
      return {
        ...state,

        isLoading: true,
      };

    case "LOYALTY_REWARDS_UPDATED":
      return {
        ...state,
        lvcLocked: action.payload,
        isLoading: false,
      };

    case "LOYALTY_REWARDS_UPDATING_ERROR":
      return {
        ...state,

        isLoading: false,
      };
  }

  return state;
};
export default loyaltyRewardsReducer;

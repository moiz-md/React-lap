import { GET_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT } from "../Constant/Constant";

const initialState = {
  productDetails: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        productDetails: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        productDetails: state.productDetails.concat(action.payload),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        productDetails: state.productDetails.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;

export const getData = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/ProductDetails.json")
      .then((res) => res.json())
      .then((res2) => {
        dispatch(displayData(res2));
      });
  };
};

export const displayData = (payload) => {
  return {
    type: "GET_PRODUCT",
    payload: payload,
  };
};

export const addData = (payload) => {
  return {
    type: "ADD_PRODUCT",
    payload: payload,
  };
};

export const deletData = (id) => {
  return {
    type: "DELETE_PRODUCT",
    payload: id,
  };
};

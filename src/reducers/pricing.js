const pricing = (state=[], action) => {
  switch(action.type) {
    case "APPLY_PROMO_CODE":
      if(action.code === "DISCOUNT") {
        return {
          ...state,
          subTotal: state.subTotal * .9,
          total: state.total * .9

        }
      }
      else {
        return state;
      }
    default:
      return state;
  }
}

export default pricing

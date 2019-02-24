const todos = (state=[], action) => {
  switch(action.type) {
    case "APPLY_PROMO_CODE":
      if(action.code === "DISCOUNT") {
        return state;
      }
      else {
        return state;
      }
    default:
      return state;
  }
}

export default todos

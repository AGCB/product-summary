const toggleSavingsInfo = (state=false, action) => {
  switch(action.type) {
    case "TOGGLE_SAVINGS_INFO":
      return !state
    default:
      return state;
  }
}

export default toggleSavingsInfo

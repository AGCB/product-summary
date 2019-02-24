let savingsToggle = 0;

export const toggleSavingsInfo = () => ({
  type: "TOGGLE_SAVINGS_INFO",
  toggleSavingsInfo: savingsToggle++ % 2
})


export const applyPromoCode = (code) => ({
  type: "APPLY_PROMO_CODE",
  code
})


export default toggleSavingsInfo;

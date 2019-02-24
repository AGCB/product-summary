import { createStore } from "redux";
import rootReducer from "./reducers/";

const pricingData = {
  pricing: {
    subTotal: 102.96,
    savings: 3.85,
    tax: 8.92,
    total: 108.03,
    zip: 85050
  },
  itemDetails: {
    itemName: "Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red",
    url: "https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
    quantity: 1
  },
  toggleSavingsInfo: false
}


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
                 window.__REDUX_DEVTOOLS_EXTENSION__()


export default createStore(rootReducer, pricingData, devTools)

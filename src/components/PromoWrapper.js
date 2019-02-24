import React from 'react';
// import { connect } from 'react-redux';
// import store from '../store';
// import { applyPromoCode } from '../actions';
import UserInput from './UserInput';

class PromoWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promoToggle: true,
    }
  }
  render() {
    const { promoToggle } = this.state;
    return (
      <div>
        <div
          className={promoToggle?"see-promo-code":"see-promo-toggle" }
          >

          <span
            className={promoToggle? "myMargin": "promo-span"}
            >
            {promoToggle?"Apply":"Hide"} promo code
          </span>

          <span
            style={{
              fontSize: "25px",
              color: "grey",
              marginTop: "7px",
              marginLeft: "10px"
            }}
            onClick={(e) => {
              e.preventDefault();
              this.setState(prev => ({promoToggle: !prev.promoToggle}))
            }}>
            {`${promoToggle?"+":"-"}`}
          </span>
        </div>
        <UserInput promoToggle={promoToggle}/>
      </div>

    )
  }
}

export default PromoWrapper;

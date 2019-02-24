import { connect } from 'react-redux'
import React from 'react'
import store from '../store';
import ItemDetailsWrapper from './ItemDetailsWrapper';
import PromoWrapper from './PromoWrapper';

const Pricing = ({dispatch, onClick, pricing}) => (
  <div className="pricing">
    <ul>

      <li className="subtotal">
        <span>Subtotal</span>
        <span style={{fontWeight: "bold"}}>{`$${(pricing.subTotal).toFixed(2)}`}</span>
      </li>

      <li onClick={onClick} className="savings" >
        <span style={{textDecoration: "underline"}}>
          Pickup savings
        </span>
        <span
          style={{
            color: "rgba(200,30,30,20)",
            fontWeight: "bold"}}>
          {`-$${pricing.savings}`}
        </span>
      </li>

      <li className="taxes">
        <span>Est. taxes & fees
          <br/>
          (Based on 94085)
        </span>
        <span style={{fontWeight: "bold"}}>{`$${pricing.tax}`}</span>
      </li>

      <hr style={{width: "100%"}}></hr>
      <li className="total">
        <span>Est. total</span>
        <span>{`$${(pricing.total).toFixed(2)}`}</span>
      </li>
    <ItemDetailsWrapper />
    <hr style={{width: "100%", opacity:".7", marginBottom: "5px"}}></hr>
    <PromoWrapper />
  </ul>
  </div>
)

const mapStateToProps = state => ({
  pricing: state.pricing
})

const mapDispatchToProps = dispatch => ({
  onClick: () => store.dispatch({type: "TOGGLE_SAVINGS_INFO"})
})

export default connect(mapStateToProps, mapDispatchToProps)(Pricing)

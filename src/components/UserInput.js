import React from 'react'
import { connect } from 'react-redux'
import { applyPromoCode } from '../actions/'

const UserInput = ({dispatch, promoToggle}) => {
  let input;
  let discountApplied = false;
  return (
    <form
      onSubmit={e => {
           e.preventDefault()
           if(!input.value.trim()) {
             return
           }
           if(!discountApplied)
           dispatch(applyPromoCode(input.value))
           input.value = ''
           discountApplied = true;
         }}
    className={promoToggle? "hidden-promo": "shown-promo"}
    >
    <label
      style={{
        marginLeft: "-45%",
        color: "rgba(0,0,0,0.65)"
      }}
    >Promo code
    </label>
      <div
        style={{
          display:"flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}>
        <input
          ref={node=>input=node}
          style={{
            borderRadius: "5px",
            boxShadow: "none",
            border: "1px solid rgba(0,0,0,.2)",
            maxWidth: "60%"
          }}
          />
        <button
          type="submit"
          style={{
            borderRadius: "10px",
            border: "1px solid black",
            color: "black",
            fontWeight: "bold",
            backgroundColor: "rgba(255,255,255,1)"
          }}
          >
          Apply
        </button>
      </div>
    </form>
  )
}

export default connect()(UserInput);

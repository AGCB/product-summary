import React from 'react';
import { connect } from 'react-redux';

const ItemDetails = ({
  url,
  itemName,
  quantity,
  subTotal,
  savings
}) => (
  <div className="item-details">
    <br/>

    <img
      width = "80px"
      alt = "chair"
      src = {url}
    />

  <span className="item-name">
      {itemName}
      <br/>

      <span
        style={{
          display:"flex",
          flexDirection: "row",
          justifyContent: "space-evenly"
        }}
      >
        <span style={{fontWeight: "bold"}}>{`$${(subTotal-savings).toFixed(2)}`}</span>
        <span>{`Qty: ${quantity}`}</span>
      </span>
      <span
        style={{
          fontWeight: "bold",
          textDecoration: "line-through",
          color: "rgba(0,0,0,0.7)"
        }}
      >
        {`$${(subTotal).toFixed(2)}`}
      </span>
    </span>

  </div>
)

const mapStateToProps = state => ({
  url: state.itemDetails.url,
  itemName: state.itemDetails.itemName,
  quantity: state.itemDetails.quantity,
  savings: state.pricing.savings,
  subTotal: state.pricing.subTotal
})


export default connect(mapStateToProps)(ItemDetails);

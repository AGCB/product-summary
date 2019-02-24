// import { connect } from 'react-redux';
// import store from '../store';
import React from 'react';
import ItemDetails from './ItemDetails';


class ItemDetailsWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    }
  }
  render() {
    const { toggle } = this.state;
    return (
      <div>
        <div className={!toggle?"see-item-details": "see-item-details bottom-margin"}>
          <span style={{textDecoration: "underline"}}>{toggle?"See":"Hide"} item details</span>
          <span
            style={{fontSize: "25px",
              color: "grey",
              marginTop: "-3px",
              marginLeft: "10px"}}
            onClick={(e) => {
              e.preventDefault();
              this.setState(prev => ({toggle: !prev.toggle}))
            }}
          >
            {`${toggle?"+":"-"}`}
          </span>

          <div className="details">

          </div>
          </div>

          <div className={toggle?"hidden": ""}>
            <ItemDetails />
          </div>
      </div>
    )
  }
}



export default ItemDetailsWrapper;

import React from 'react';
import { connect } from 'react-redux';

const PickupModal = ({toggleSavingsInfo}) => (
       <div className={toggleSavingsInfo? "modal":"hidden"}>
       <p>
       Picking up your order in the store helps cut costs,
       and we pass the savings onto you.
       </p>
       </div>
     )

const mapStateToProps = state => ({
  toggleSavingsInfo: state.toggleSavingsInfo
})

export default connect(mapStateToProps)(PickupModal)

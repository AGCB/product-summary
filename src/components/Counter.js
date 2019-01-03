import React from 'react'
import { connect } from 'react-redux'
import store from '../store'

const Counter = ({dispatch, value, onClick}) => {
    return (
      <div>
        <span>{value}</span>
        <button onClick={onClick}>click me pleazz</button>
      </div>
    )

}
const mapStateToProps = state => {
  return {
    value: state.counter}
}

const mapDispatchToProps = dispatch => ({
  onClick: () => store.dispatch({type: "INCREMENT"})
})

export default connect(mapStateToProps,mapDispatchToProps)(Counter)

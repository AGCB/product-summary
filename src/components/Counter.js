import React from 'react'

class Counter extends React.Component {
  render() {
    const { onIncrement, value } = this.props
    console.log(onIncrement)
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncrement}>click me pleazz</button>
      </div>
    )
  }
}

export default Counter

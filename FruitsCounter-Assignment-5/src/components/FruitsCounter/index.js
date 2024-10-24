import { Component } from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = { count1: 2, count2: 2 }
  onIncrement1 = () => {
    this.setState(prevState => ({ count1: prevState.count1 + 1, }))
  }
  onIncrement2 = () => {
    this.setState(prevState => ({ count2: prevState.count2 + 1 }))
  }


  render() {
    const { count1, count2 } = this.state;

    return (
      <div className="container1">
        <h1 className="h1">Bob ate <span className="s1"> {count1}</span> mangoes <span className="s1">{count2}</span> bananas</h1>
        <div className="container2">

          <img src=" https://assets.ccbp.in/frontend/react-js/mango-img.png" alt="avatar" className="image1" />
          <img src="https://assets.ccbp.in/frontend/react-js/banana-img.png" alt="avatar2" className="image2" />
        </div>
        <div className="container3">
          <button className="button1" id="b1" onClick={this.onIncrement1}>Eat Mangoes</button>
          <button className="button1" id="b2" onClick={this.onIncrement2} >Eat bananas</button>

        </div>
      </div>

    )

  }
}

export default FruitsCounter;

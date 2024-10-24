import { Component } from "react";
import './index.css';
class LettersCalculator extends Component{
  state={count:0}
   stringCount=(event)=>{
        this.setState({count:event.target.value.length})
   }
    render(){
      const {count}=this.state;

        return(
          <div  className="main-container">
              <div className="sub-container">
                 <h1 className="calc">Calculate the <br/>  Letters you enter</h1>
                 <p className="phrase">Enter the phrase</p>
                 <input type="text" className="input" placeholder="calculator" onChange={this.stringCount}/> 
                 <p className="display">No of letters : {count}</p>
                </div>
                <div>
                  <img src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png" alt="avatar" className="image"/>
                </div>
                </div>
        )
    }
}

export default LettersCalculator;
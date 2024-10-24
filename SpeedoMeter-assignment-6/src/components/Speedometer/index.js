// Write your code here
import { Component } from 'react/cjs/react.production.min'
import './index.css'
class Speedometer extends Component{
    state={count:0}
   render()
   {
    const {count}=this.state;
    Accel=()=>{
        this.setState(prevState=>({count:prevState.count+10}))
    }
       return(
           <div>
               <h1 className="h1">SPEEDOMETER</h1>
                
               <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt=".avatar" className="image"/>
               
               <h1 className="h2">Speed id 0mph</h1>
               <p className="p1">Min Limit is {count}mph,Max Limit is 200mph</p>
               <div className="bcontainer">
                   <button className="button1" id="b1" onClick={this.Accel}>Accelerate</button>
                   <button className="button2" onClick={this.brake}>Apply Brake</button>
               </div>
           </div>
       )
   }
}

export default Speedometer
 
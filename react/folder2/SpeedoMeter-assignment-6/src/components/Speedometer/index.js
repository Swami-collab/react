import { Component } from 'react'
 
 import './index.css'
 class Speedometer extends Component{
    state ={fast:0};
    accelerate=()=>{
        this.setState(prevState=>({fast:prevState.fast+15}))
    }

    brake=()=>{
        this.setState(prevState=>({fast:prevState.fast-10}))
    }
    render()
    {
        const {fast}=this.state
       
        return(
            <div className='main-container'>
                <h1 className='heading'>SPEEDOMETER</h1> 
                <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt=".avatar" className='image'/>
                
                <h1 className='speed'>Speed id {fast}</h1>
                <p className='content'>Min Limit is 0mph,Max Limit is 200mph</p>
                <div>
                    <button className="button1" id="b1" onClick={this.accelerate}>Accelerate</button>
                    <button className="button2" onClick={this.brake}>Apply Brake</button>
                </div>
            </div>
        )
    }
 }

 export default Speedometer;
import {Component} from 'react'
import './index.css'
class RandomNumberGenerator extends Component{
    state={number:0};
    generate=()=>{
        this.setState
        ({number:Math.ceil(Math.random()*100)})
    }

    render(){
        const {number}=this.state
        return(
       <body>
         <div className='main-container'>
         <div className='child-container'>
        <h1 className=' title'>Random Number</h1>
            <p className='content'>Generate a random number  in the <br/>
                                    <center> range of 0 and 100  </center></p>
            <button type="button" onClick={this.generate}>Generate</button>
            <span className='num'>{number}</span>
          </div>
         </div>
       </body>
        )
     
    }
}

export default RandomNumberGenerator;
import {Component} from 'react';
import './index.css';
import DenominationItem from '../DenominationItem';

class CashWithdrawal extends Component{
    state={number:1150}
    drawMoney=(id)=>{
         
       
        if( id==1 )
        {
            this.setState(prevstate=>({number:prevstate.number-50}))

        }
        else if(id==2 )
        {
            this.setState(prevstate=>({number:prevstate.number-100}))

        }
        else if(id==3 )
        {
            this.setState(prevstate=>({number:prevstate.number-200}))
        }
        else if(id==4 )
        {
            this.setState(prevstate=>({number:prevstate.number-500}))

        }
        else{
            console.log("no money")
        }
    
    }

    render(){
        const{number}=this.state;
       const { denominationsList }=this.props;
          return(
            
            <div className="main-container">
                <div className='sub-container'>
                <p className='S'><b><span>S</span></b></p>
                <p className='sarah' >Sarah Williams</p>
                </div>
                <div className='sub-container2'>
               <p className='balance'>Your Balance</p>  
               <p className='amount'>{number}</p>
               </div>
                <p className='withdra'>Withdraw</p>
                <p className='balance'>CHOOSE SUM (IN RUPEES)</p>
                <ul>{
                    denominationsList.map((eachItem)=>(
                    <DenominationItem key={eachItem.id} denominationsList={eachItem} drawMoney={this. drawMoney}/>
                    ))}</ul>
                </div>
                 
         )
         
        
    }
}
export default CashWithdrawal;
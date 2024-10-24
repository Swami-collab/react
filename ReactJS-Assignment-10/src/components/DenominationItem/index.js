 import './index.css'

 const DenominationItem=(props)=>{
    const {denominationsList,drawMoney }=props;
    const{id,value}=denominationsList;

const mDraw=()=>{
  drawMoney(id);
}
 

    return(
      <div className='d-container'>
      <button type="button" onClick={mDraw}>{value}</button>
      </div>
    )


 }
 export default DenominationItem;
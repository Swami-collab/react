 import './index.css'
 const TabItem=(props)=>{
    const {tabsList,pressBtn,isactive}=props;
    const {tabId,displayText}=tabsList;
   const active=isactive? " btn-style":"";
    const  onClickBtn=()=>{
        pressBtn(tabId);

    }

    return(
        <div className="btn-container">
            <button className={`buttons ${active}`} type="button" onClick={onClickBtn}>{displayText}</button>
        </div>
    )
 }

 export default TabItem;
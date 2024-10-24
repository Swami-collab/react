const Notification = props => {
 const {text,className}  =props;
 return( <div  className={className}>{text}</div>);
}

const element = (
  <div className="main-container">
        
        <h1 className="n" >Notifications</h1>

    <div className="sub">
    <Notification text=" Information Message" className="b1"/>
    <Notification text="Success Message" className="b2"/>
    <Notification text="Warning Message" className="b3"/>
    <Notification text="Error Message" className="b4"/>
    </div>
</div>
 );
let rootelement=document.getElementById("root");
ReactDOM.render(element,   rootelement);

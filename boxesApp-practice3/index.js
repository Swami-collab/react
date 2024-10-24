const Box = props => {
  const {className,boxtext} = props;
  return (
    <div className={className}>{boxtext}</div>); 
}

const ele = (
  <div className="maincontainer">
    <h1 className="d">Boxes</h1> 
    <div className="container2">
      <Box boxtext="small" className="b1" />
      <Box boxtext="Medium" className="b2" />
      <Box boxtext="Large" className="b3" />

    </div>
  </div>
);

let rootelement=document.getElementById("root")

ReactDOM.render(ele, rootelement);
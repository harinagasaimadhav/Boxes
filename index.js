const Box = (props) => {
  //  Write your code here.
  const { content, className } = props;

  return (
    <div className={`box ${className}`}>
      <p className="box-content">{content}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box content="Small" className="small-box" />
      <Box content="Medium" className="medium-box" />
      <Box content="Large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

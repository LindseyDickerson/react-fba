import React from 'react';


var footerStyle = {
    backgroundColor: "#22545c",
    borderTop: "1px solid #474545",
    textAlign: "center",
    padding: "20px",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer() {
  return (
    <div>
        <div style={phantom} />
        <div style={footerStyle}>
            <p>2020© Frank's Bread Academy</p>
        </div>
    </div>
  );
}
export default Footer;
import React from 'react';

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    width: "100%",
    backgroundColor: "#343a40",
    color: "white",
    textAlign: "center",
    padding: "10px 0",
    borderTop: "1px solid #ddd",
    boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.2)",
  };

  return (
    <footer style={footerStyle}>
      <p>Copyright &copy; MyTodosList.com</p>
    </footer>
  );
};

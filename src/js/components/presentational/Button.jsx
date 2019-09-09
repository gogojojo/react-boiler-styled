import React from "react";
import PropTypes from "prop-types";
const Button = ({ children, clickFunc,  buttonColor }) => (
	<button 
		onClick={clickFunc}
		style={{
			backgroundColor: buttonColor
		}}
	>
	  {children}
	</button>
);
Button.propTypes = {
	clickFunc: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired
};
export default Button;

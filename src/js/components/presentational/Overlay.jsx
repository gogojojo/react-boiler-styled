import React from "react";
import PropTypes from "prop-types";

const Overlay = ({ children, overlayOpen }) => (
	<div className={`overlay ${overlayOpen ? "open" : "closed"}`}>
		{children}
	</div>
);
Overlay.propTypes = {
	overlayOpen: PropTypes.bool,
	children: PropTypes.node.isRequired
};
export default Overlay;

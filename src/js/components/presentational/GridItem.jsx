import React from "react";
import PropTypes from "prop-types";

const GridItem = ({ children, gridWidth }) => (
	<div
		className={`grid-item ${gridWidth}`}
	>
		{children}
	</div>
);
GridItem.propTypes = {
	gridWidth: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};
export default GridItem;

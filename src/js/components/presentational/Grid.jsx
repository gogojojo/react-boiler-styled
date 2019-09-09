import React from "react";
import PropTypes from "prop-types";

const Grid = ({ children }) => <div className="grid">{children}</div>;

Grid.propType = {
	children: PropTypes.node.isRequired
}

export default Grid;

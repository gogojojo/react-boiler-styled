import React from "react";
import PropTypes from "prop-types";

const Image = ({ image, imageHeight, imageWidth }) => (
	<div
		className="image"
		style={{
			height: imageHeight,
			width: imageWidth
		}}
	>
		<img src={image} />
	</div>
);
Image.propTypes = {
	image: PropTypes.string.isRequired,
};
export default Image;

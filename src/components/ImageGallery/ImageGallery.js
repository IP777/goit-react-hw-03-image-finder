import React from "react";
import PropTypes from "prop-types";
//---------------------------------------
import "./ImageGallery.css";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ gallery }) => (
	<ul className="ImageGallery">
		{gallery.map((item) => (
			<ImageGalleryItem
				key={item.id}
				webformatURL={item.webformatURL}
				tags={item.tags}
				largeImageURL={item.largeImageURL}
			/>
		))}
	</ul>
);

ImageGallery.propTypes = {
	gallery: PropTypes.array.isRequired,
};

export default ImageGallery;

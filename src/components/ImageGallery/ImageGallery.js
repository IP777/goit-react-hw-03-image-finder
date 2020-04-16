import React from "react";
import "./ImageGallery.css";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ gallery }) => {
	//console.log("ImageGallery");
	return (
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
};

export default ImageGallery;

import React from "react";
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

export default ImageGallery;

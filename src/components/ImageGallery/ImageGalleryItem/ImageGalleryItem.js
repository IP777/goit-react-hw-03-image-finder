import React, { Component } from "react";
import "./ImageGalleryItem.css";
import Modal from "./../Modal/Modal";

export default class ImageGalleryItem extends Component {
	state = { click: false };

	escFunction(event) {
		if (event.keyCode === 27) {
			this.setState({
				click: false,
			});
		}
	}

	handelClick = () => {
		if (!this.state.click) {
			document.addEventListener("keydown", this.escFunction.bind(this));
		}

		this.setState({
			click: !this.state.click,
		});
	};

	render() {
		const { webformatURL, tags, largeImageURL } = this.props;
		const { click } = this.state;
		return (
			<>
				<li className="ImageGalleryItem">
					<img
						src={webformatURL}
						alt={tags}
						className="ImageGalleryItem-image"
						onClick={this.handelClick}
					/>
				</li>
				{click && (
					<Modal
						src={largeImageURL}
						alt={tags}
						clickState={this.handelClick}
						handelClickFalse={this.handelClickFalse}
					/>
				)}
			</>
		);
	}
}

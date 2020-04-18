import React, { Component } from "react";
import PropTypes from "prop-types";
//---------------------------------------
import "./ImageGalleryItem.css";
import Modal from "./modal/Modal";

export default class ImageGalleryItem extends Component {
	//Если click: true появляется модальное окно
	state = { click: false };

	static propTypes = {
		webformatURL: PropTypes.string.isRequired,
		largeImageURL: PropTypes.string.isRequired,
		tags: PropTypes.string,
	};

	handelModalOn = () => {
		this.setState({
			click: true,
		});
	};

	handelOffModal = () => {
		this.setState({
			click: false,
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
						onClick={this.handelModalOn}
					/>
				</li>
				{click && (
					<Modal
						src={largeImageURL}
						alt={tags}
						clickState={this.handelOffModal}
					/>
				)}
			</>
		);
	}
}

import React, { Component } from "react";
import PropTypes from "prop-types";
//---------------------------------------
import "./ImageGalleryItem.css";
import Modal from "./modal/Modal";

export default class ImageGalleryItem extends Component {
	//Если click: true появляется модальное окно
	state = { click: false };

	static propTypes = {
		key: PropTypes.number.isRequired,
		webformatURL: PropTypes.string.isRequired,
		largeImageURL: PropTypes.string.isRequired,
		tags: PropTypes.string,
	};

	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
	};

	escFunction(event) {
		if (event.keyCode === 27) {
			this.setState({
				click: false,
			});
		}
	}

	handelClick = () => {
		//вешаю Listner на документ -> Убираю в компоненте Modal функция componentWillUnmount()
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
					/>
				)}
			</>
		);
	}
}

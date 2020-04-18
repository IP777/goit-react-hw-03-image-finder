import React, { Component } from "react";
import PropTypes from "prop-types";
//---------------------------------------
import "./Modal.css";

export default class Modal extends Component {
	state = {};

	static propTypes = {
		src: PropTypes.string.isRequired,
		clickState: PropTypes.func.isRequired,
		alt: PropTypes.string,
	};

	componentWillUnmount() {
		//Убераю Listner -> вешаю в родителе функция handelClick()
		document.removeEventListener("keydown", this.escFunction);
	}

	clickFunc = (e) => {
		if (e.target.tagName !== "IMG") {
			this.props.clickState();
		}
	};

	render() {
		const { src, alt } = this.props;
		return (
			<div className="Overlay">
				<div className="Modal" id="Modal" onClick={this.clickFunc}>
					<img src={src} alt={alt} />
				</div>
			</div>
		);
	}
}

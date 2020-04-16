import React, { Component } from "react";
import "./Modal.css";

export default class Modal extends Component {
	state = {};

	componentWillUnmount() {
		//console.log(this.escFunction);
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

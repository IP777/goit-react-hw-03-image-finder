import React, { Component } from "react";
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import ButtonLoadMore from "./buttonLoadMore/ButtonLoadMore.js";
import Loader from "react-loader-spinner";
import "./App.css";

import { axiosRequest } from "./axiosRequest/AxiosRequest";

export default class App extends Component {
	state = {
		gallery: [],
		request: "",
		pagination: 1,
		isLoading: false,
		error: null,
	};

	fetchArticles = (value, pagination) => {
		this.setState({ isLoading: true });

		axiosRequest(value, pagination)
			.then((response) => {
				if (pagination > 1) {
					this.setState({
						gallery: [...this.state.gallery, ...response.data.hits],
						request: value,
					});
				} else {
					this.setState({
						gallery: response.data.hits,
						request: value,
					});
				}
			})
			.catch((error) => this.setState({ error }))
			.finally(() => this.setState({ isLoading: false }));
	};

	setPagination = () => {
		const newPagination = this.state.pagination + 1;

		this.fetchArticles(this.state.request, newPagination);

		this.setState({
			pagination: newPagination,
		});
	};

	componentDidUpdate() {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: "smooth",
		});
	}

	render() {
		const { gallery, isLoading, error } = this.state;
		return (
			<div className="App">
				<Searchbar onSubmit={this.fetchArticles} />
				{gallery.length > 0 && <ImageGallery gallery={gallery} />}
				{isLoading && (
					<Loader
						type="ThreeDots"
						color="#00BFFF"
						height={80}
						width={80}
						timeout={3000} //3 secs
						className="Spinner"
					/>
				)}
				{gallery.length > 0 && (
					<ButtonLoadMore setPagination={this.setPagination} />
				)}
				{error && (
					<h3 className="Error">
						Oops something happened: {error.message}
					</h3>
				)}
			</div>
		);
	}
}

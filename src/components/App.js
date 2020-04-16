import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ButtonLoadMore from "./ImageGallery/ButtonLoadMore/ButtonLoadMore";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "15197033-6a0a9e6d0bedb15a0a6a5ba9a";

export default class App extends Component {
	state = {
		gallery: [],
		request: "",
		pagination: 1,
		isLoading: false,
	};

	componentDidUpdate(prevProps, prevState) {
		const { request: prevGallery, pagination: prevPagination } = prevState;
		const { request: nextGallery, pagination: nextPagination } = this.state;

		if (prevGallery !== nextGallery) {
			console.log(nextGallery);
			this.fetchArticles(nextGallery);
		}

		if (prevPagination !== nextPagination) {
			console.log(nextPagination);
			this.fetchArticles(this.state.request);
		}
	}

	componentDidMount() {
		this.fetchArticles(this.state.request);
	}

	fetchArticles = (value) => {
		this.setState({ isLoading: true });

		axios
			.get(
				`${BASE_URL}?key=${API_KEY}&q=${value}&image_type=photo&per_page=12&page=${this.state.pagination}`
			)
			.then((response) => {
				this.setState((state) => ({
					gallery: response.data.hits,
					request: value,
				}));
				//console.log(this.state.gallery);
			})
			.catch(console.log)
			.finally(() => this.setState({ isLoading: false }));
	};

	setPagination = () => {
		this.setState((state) => ({ pagination: state.pagination + 1 }));
	};

	render() {
		const { gallery, isLoading } = this.state;
		return (
			<>
				<Searchbar onSubmit={this.fetchArticles} />
				{isLoading ? (
					<Loader
						type="ThreeDots"
						color="#00BFFF"
						height={80}
						width={80}
						timeout={3000} //3 secs
					/>
				) : (
					<ImageGallery gallery={gallery} />
				)}
				{gallery.length > 0 && (
					<ButtonLoadMore setPagination={this.setPagination} />
				)}
			</>
		);
	}
}

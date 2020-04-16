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

// request: 'flower',
// pagination: 1,
// buildUrl(pageIndex) {
//   const URL = `${this.baseUrl}api/?key=${this.API_KEY}&q=${this.request}&image_type=photo&per_page=12&page=${pageIndex}`;
//   return URL;
//const URL = `https://pixabay.com/api/?key=15197033-6a0a9e6d0bedb15a0a6a5ba9a&q=flower&image_type=photo&per_page=12&page=1`;

export default class App extends Component {
	state = {
		gallery: [],
		request: "flower",
		pagination: 1,
		isLoading: false,
	};

	onSubmit = (evt) => {
		evt.preventDefault();

		this.fetchArticles();
	};

	componentDidUpdate(prevProps, prevState) {
		console.log(prevState);
	}

	fetchArticles = (value) => {
		this.setState({ isLoading: true });
		//console.log("change", value);

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
		const value = this.state.pagination + 1;
		this.setState({ pagination: value });
		this.fetchArticles(this.state.request);
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
					<>
						<ImageGallery gallery={gallery} />
						<ButtonLoadMore setPagination={this.setPagination} />
					</>
				)}
			</>
		);
	}
}

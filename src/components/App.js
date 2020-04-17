import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ButtonLoadMore from "./ImageGallery/ButtonLoadMore/ButtonLoadMore";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

import { axiosRequest } from "./axiosRequest/AxiosRequest";

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

		console.log("prev", prevGallery, "next", nextGallery);

		if (prevGallery !== nextGallery) {
			//console.log(nextGallery);
			this.fetchArticles(nextGallery);
		}

		//Если пагинация больше предидущей то отправляем новый запрос
		if (prevPagination !== nextPagination) {
			//console.log(nextPagination);
			this.fetchArticles(this.state.request);
		}

		//При изменение плавно опускаем страницу в низ
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: "smooth",
		});
	}

	componentDidMount() {
		//this.fetchArticles(this.state.request);
	}

	fetchArticles = (value) => {
		this.setState({ isLoading: true });

		axiosRequest(value, this.state.pagination)
			.then((response) => {
				//Если пагинация больше 1 то генерируется новая галерея + старая
				if (this.state.pagination > 1) {
					this.setState((state) => ({
						gallery: [...state.gallery, ...response.data.hits],
						request: value,
					}));
				} else {
					this.setState((state) => ({
						gallery: response.data.hits,
						request: value,
					}));
				}
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
			<div className="App">
				<Searchbar onSubmit={this.fetchArticles} />
				{isLoading ? (
					<Loader
						type="ThreeDots"
						color="#00BFFF"
						height={80}
						width={80}
						timeout={3000} //3 secs
						style={{ justifySelf: "center" }}
					/>
				) : (
					<ImageGallery gallery={gallery} />
				)}
				{gallery.length > 0 && (
					<ButtonLoadMore setPagination={this.setPagination} />
				)}
			</div>
		);
	}
}

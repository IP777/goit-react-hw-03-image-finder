import React, { Component } from "react";
import PropTypes from "prop-types";
//---------------------------------------
import "./Searchbar.css";

export default class Searchbar extends Component {
	state = { query: "" };

	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
	};

	handleChange = (e) => {
		this.setState({
			query: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		this.props.onSubmit(this.state.query, 1);

		this.setState({ query: "" });
	};

	render() {
		const { query } = this.state;
		return (
			<header className="Searchbar">
				<form className="SearchForm" onSubmit={this.handleSubmit}>
					<button type="submit" className="SearchForm-button">
						<span className="SearchForm-button-label">Search</span>
					</button>

					<input
						className="SearchForm-input"
						type="text"
						autoComplete="off"
						autoFocus
						placeholder="Search images and photos"
						name="request"
						value={query}
						onChange={this.handleChange}
					/>
				</form>
			</header>
		);
	}
}

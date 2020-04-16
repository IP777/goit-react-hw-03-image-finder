import React from "react";
import "./ButtonLoadMore.css";

const ButtonLoadMore = ({ setPagination }) => {
	//console.log("ButtonLoadMore");
	return <button onClick={setPagination}>Load more ....</button>;
};

export default ButtonLoadMore;

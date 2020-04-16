import React from "react";
import "./ButtonLoadMore.css";

const ButtonLoadMore = ({ setPagination }) => {
	//console.log("ButtonLoadMore");

	// window.scrollTo({
	// 	top: document.documentElement.scrollHeight,
	// 	behavior: 'smooth',
	//   });

	return (
		<button className="Button2" onClick={setPagination}>
			Load more ....
		</button>
	);
};

export default ButtonLoadMore;

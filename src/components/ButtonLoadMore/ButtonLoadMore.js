import React from "react";
import "./ButtonLoadMore.css";

const ButtonLoadMore = ({ setPagination }) => {
	return (
		<button className="Button2" onClick={setPagination}>
			Load more ....
		</button>
	);
};

export default ButtonLoadMore;

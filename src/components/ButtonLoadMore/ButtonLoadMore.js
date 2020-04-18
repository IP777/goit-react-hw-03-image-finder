import React from "react";
import PropTypes from "prop-types";
//---------------------------------------
import "./ButtonLoadMore.css";

const ButtonLoadMore = ({ setPagination }) => {
	return (
		<button className="Button2" onClick={setPagination}>
			Load more ....
		</button>
	);
};

ButtonLoadMore.propTypes = {
	setPagination: PropTypes.func.isRequired,
};

export default ButtonLoadMore;

import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "15197033-6a0a9e6d0bedb15a0a6a5ba9a";

export const axiosRequest = (value, pagination) => {
	return axios.get(
		`${BASE_URL}?key=${API_KEY}&q=${value}&image_type=photo&per_page=12&page=${pagination}`
	);
};

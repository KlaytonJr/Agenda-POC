import axios from "axios";

const api = axios.create({
    baseURL: "https://code-recrute.onrender.com"
});

export function apiPost(url, data) {
	const config = {
		headers: {
			accept: '*/*',
			'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
		}
	};

	return api.post(url, data, config);
}

export function apiGet(url) {
	const config = {
		headers: {
			accept: '*/*',
			'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
		}
	};

	return api.get(url, config);
}

export default api;

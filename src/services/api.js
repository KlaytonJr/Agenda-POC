import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080"
});

export function apiPost(url, data) {
	const config = {
		headers: {
			accept: '*/*',
			'Content-Type': 'application/json',
		}
	};

	return api.post(url, data, config);
}

export function apiPatch(url, data) {
	const config = {
		headers: {
			accept: '*/*',
			'Content-Type': 'application/json',
		}
	};

	return api.patch(url, data, config);
}

export function apiDelete(url) {
	const config = {
		headers: {
			accept: '*/*',
			'Content-Type': 'application/json',
		}
	};

	return api.delete(url, config);
}

export function apiGet(url) {
	const config = {
		headers: {
			accept: '*/*',
			'Content-Type': 'application/json',
		}
	};

	return api.get(url, config);
}

export default api;

import axios from 'axios';
class Axios {
	constructor() {
		this.defaultURL = 'http://localhost:7400';
	}
	get(url) {
		return axios.get(`${this.defaultURL}/${url}`);
	}
	post(url, data) {
		return axios.post(`${this.defaultURL}/${url}`, data);
	}
}
export default Axios;

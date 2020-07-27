import axios from 'axios';
class Axios {
	constructor() {}
	get(url) {
		return axios.get(url);
	}
	post(url, data) {
		return axios.post(url, data);
	}
}
export default Axios;

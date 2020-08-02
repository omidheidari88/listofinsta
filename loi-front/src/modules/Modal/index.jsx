import React, {useState} from 'react';
import Modal from './Modal';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Axios from '../../Ajax/Axios';

const axios = new Axios();
const Modals = () => {
	const [show, updateShow] = useState(false);
	const [type, setType] = useState('login');
	const changer = (input) => {
		return setType(input);
	};
	const dataHandler = (item) => {
		// this.setState((prev) => {
		// 	return {
		// 		...prev,
		// 		is_loading: true,
		// 	};
		// });
		if (type === 'login') {
			axios
				.post('auth/login', item)
				.then((res) => {
					console.log(res.data);
					// this.setState((prev) => {
					// 	return {
					// 		...prev,
					// 		items: [...prev.productItems, res.data.item],
					// 	};
					// });
				})
				.catch((err) => console.log(err))
				.finally(() => {
					// this.setState((prev) => {
					// 	return {
					// 		...prev,
					// 		is_loading: false,
					// 	};
					// });
				});
		}
		if (type === 'register') {
			axios
				.post('auth/register', item)
				.then((res) => {
					console.log(res.data);
					// this.setState((prev) => {
					// 	return {
					// 		...prev,
					// 		items: [...prev.productItems, res.data.item],
					// 	};
					// });
				})
				.catch((err) => console.log(err))
				.finally(() => {
					// this.setState((prev) => {
					// 	return {
					// 		...prev,
					// 		is_loading: false,
					// 	};
					// });
				});
		}
	};
	const formShow = (type) => {
		return type === 'login' ? <Login changeType={changer} item={dataHandler} /> : <Register changeType={changer} item={dataHandler} />;
	};
	return (
		<div style={{'direction': 'ltr', 'text-align': 'left'}}>
			<Modal show={show} body={formShow(type)} closeModal={() => updateShow(false)} />
			<button onClick={(e) => updateShow(true)} style={{color: 'white'}}>
				List of Insta
			</button>
		</div>
	);
};

export default Modals;

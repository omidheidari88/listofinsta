import React, {useState, useEffect} from 'react';
import Phone from '../../Partials/Phone/Phone';
import {list} from '../../Partials/style';
const UserProfile = (props) => {
	const userId = props.match.params.id;
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch(`https://jsonplaceholder.ir/users/${userId}`)
			.then((res) => res.json())
			.then((dataFetch) => {
				setItems(dataFetch);
				// localStorage.setItem('table', JSON.stringify(dataFetch));
			});
	}, []);

	const {email, name, avatar, phone, company} = items;
	const userRender = (
		<div>
			<div style={list}>
				<img src={avatar} alt="" />
			</div>
			<div>نام : {name} </div>
			<div>ایمیل : {email}</div>
			<div>شرکت: {company}</div>
			<div>
				موبایل :<Phone number={phone} />
			</div>
		</div>
	);

	return (
		<div className="row text-center">
			<div className="col">
				<div className="card">{userRender}</div>
			</div>
		</div>
	);
};

export default UserProfile;

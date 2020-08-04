import React, {useState, useEffect} from 'react';
import userContext from '../../Utility/userContext';
import User from './User';

const Users = (props) => {
	const [theme, setTheme] = useState('dark');
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.ir/users')
			.then((res) => res.json())
			.then((dataFetch) => {
				setItems(dataFetch);
				// localStorage.setItem('table', JSON.stringify(dataFetch));
			});
	}, []);
	const userRender = items.map((data) => <User data={data} metaData={props} />);
	return (
		<div>
			{theme === 'dark' ? (
				<button onClick={() => setTheme(theme === 'dark' ? 'white' : 'dark')}>
					<i className="material-icons">toggle_off</i>
				</button>
			) : (
				<button onClick={() => setTheme(theme === 'white' ? 'dark' : 'white')}>
					<i className="material-icons">toggle_on</i>
				</button>
			)}
			<userContext.Provider value={theme}>
				<table className="table table-bordered table-hover table-striped text-center" style={{width: '70%', height: '50%'}}>
					<thead>
						<tr className="dark">
							<td>pics</td>
							<td>name</td>
							<td>link</td>
						</tr>
					</thead>
					<tbody>{userRender}</tbody>
				</table>
			</userContext.Provider>
		</div>
	);
};

export default Users;

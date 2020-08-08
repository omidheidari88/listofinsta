import React, {useState, useEffect} from 'react';
import {UserContext} from '../store/ContextManager';
import {connect} from 'react-redux';
import User from './User';
import Filter from '../../Partials/Filter';
import FilterSign from '../../Partials/Filter/FilterSign';
import TableWithCash from '../HOC/TableWithCash';
const Users = (props) => {
	const {history, location, userState, addUser} = props;
	const query = new URLSearchParams(location.search);
	const [users, setUsers] = useState([]);
	const [type, setType] = useState('id');
	const [theme, setTheme] = useState('dark');
	const [showFilter, setShowFilter] = useState(false);
	useEffect(() => {
		fetch(`https://jsonplaceholder.ir/users`)
			.then((res) => res.json())
			.then((dataFetch) => setUsers(dataFetch))
			.finally(() => addUser(users));
	}, [users.length]);

	useEffect(() => setUsers(users.sort((a, b) => (a[type] > b[type] ? -1 : 1))), [query.get('sort')]);
	const filterHandler = () => {
		history.push({
			search: new URLSearchParams({
				sort: 'acse',
			}).toString(),
		});
	};
	const usersData = [
		{
			whenClick: () => filterHandler(),
			tittle: 'ID',
		},
		{
			whenClick: () => setShowFilter(false),
			tittle: 'X',
		},
	];

	const userRender = userState.map((data) => <User data={data} metaData={props} />);
	const UserWithLocalData = TableWithCash(User, props, 'product');
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
			{/* {showFilter ? <Filter items={usersData} /> : <FilterSign item={() => setShowFilter(true)} />} */}
			<UserContext.Provider value={{theme}}>
				<div className="row">
					<div className="col">
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
					</div>
					{/* <div className="col">
						<table className="table table-bordered table-hover table-striped text-center" style={{width: '70%', height: '50%'}}>
							<thead>
								<tr className="dark">
									<td>pics</td>
									<td>name</td>
									<td>link</td>
								</tr>
							</thead>
							<tbody>{<UserWithLocalData />}</tbody>
						</table>
					</div> */}
				</div>
			</UserContext.Provider>
		</div>
	);
};

const State = (state) => {
	return {
		userState: state.users,
	};
};
const Dispatcher = (dispatch) => {
	return {
		addUser: (payload) => {
			dispatch({
				type: 'add',
				payload,
			});
		},
	};
};

export default connect(State, Dispatcher)(Users);

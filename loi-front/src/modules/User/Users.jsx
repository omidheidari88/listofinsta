import React, {useState, useEffect, lazy, Suspense} from 'react';
import {UserContext} from '../store/context/ContextManager';
import {connect} from 'react-redux';
import FetchUser from './FetchUser';
// import MongoUser from './MongoUser';
// import Filter from '../../Partials/Filter';
// import FilterSign from '../../Partials/Filter/FilterSign';
// import TableWithCash from '../HOC/TableWithCash';
import {actions} from '../actions';
import Loader from '../../Partials/Loader';

const MongoUser = lazy(() => import('./MongoUser'));

const Users = (props) => {
	const {history, location, userState, fetchUser, messages, errorMessages} = props;
	const query = new URLSearchParams(location.search);
	const [users, setUsers] = useState([]);

	const [type, setType] = useState('id');
	const [theme, setTheme] = useState('dark');
	const [showFilter, setShowFilter] = useState(false);
	useEffect(() => {
		fetch(`https://jsonplaceholder.ir/users`)
			.then((res) => res.json())
			.then((dataFetch) => setUsers(dataFetch));
		// .finally(() => fetchUser(users));
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

	const jsonPlaceHolderUsers = users.map((data) => <FetchUser data={data} metaData={props} />);
	const monngoUsers = userState.map((data) => (
		<Suspense fallback={<Loader />}>
			<MongoUser data={data} metaData={props} />
		</Suspense>
	));
	// const UserWithLocalData = TableWithCash(User, props, 'product');
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
							<tbody>{jsonPlaceHolderUsers}</tbody>
						</table>
					</div>
					<div className="col">
						<button className="btn btn-warning" onClick={() => fetchUser()}>
							<span>
								Get Data From MongoDB
								<span class="material-icons">{messages}</span>
							</span>
						</button>
						{errorMessages ? <span className="btn btn-danger">{errorMessages}</span> : ''}
						<table className="table table-bordered table-hover table-striped text-center" style={{width: '70%', height: '50%'}}>
							<tbody>{monngoUsers}</tbody>
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
							<tbody>
								<UserWithLocalData />
							</tbody>
						</table>
					</div> */}
				</div>
			</UserContext.Provider>
		</div>
	);
};

const mapState = (state) => ({userState: state.users.items, messages: state.users.messages, errorMessages: state.users.errorMessages});

const mapDispatch = (dispatch) => {
	return {
		fetchUser: (payload) => {
			dispatch({
				type: actions.FETCH_USER,
				payload,
			});
		},
	};
};

export default connect(mapState, mapDispatch)(Users);

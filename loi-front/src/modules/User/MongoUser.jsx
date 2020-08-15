import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {UserContext} from '../store/context/ContextManager';
import {connect} from 'react-redux';
import {actions} from '../actions';

const Td = ({metaData, data, updateUser, successUpdate, deleteUser}) => {
	const {match} = metaData;
	const [editable, setEditable] = useState(false);
	const url = match.url;
	const {name, avatar, _id, email} = data;
	const {theme} = useContext(UserContext);
	const updateUserName = (e) => {
		e.preventDefault();
		updateUser({
			id: _id,
			newName: document.querySelector(`#UID-${_id}`).value,
		});
		if (successUpdate) setEditable(false);
	};

	const editInput = !editable ? (
		name
	) : (
		<div>
			<input id={`UID-${_id}`} type="text" defaultValue={name} style={{backgroundColor: '#ffeeef'}} className="m-2 p-2" />
			<button className="material-icons btn btn-success btn-sm m-l-2" onClick={(e) => updateUserName(e)}>
				check
			</button>
			<button className="material-icons btn btn-danger btn-sm " onClick={(e) => setEditable(false)}>
				close
			</button>
		</div>
	);

	return (
		<tr>
			<td className={theme}>
				<img style={{width: '60px', height: '60px'}} src={avatar} alt="" />
			</td>
			<td className={theme}>{editInput}</td>
			<td className={theme}>{email}</td>
			<td className={theme}>
				<Link to={`${url}/${_id}`}>
					<i className="material-icons">link</i>
				</Link>
			</td>
			<td className={theme} onClick={(e) => setEditable(true)}>
				<button class="material-icons" style={{color: 'rgb(148, 150, 151)'}}>
					edit
				</button>
			</td>
			<td className={theme} onClick={(e) => deleteUser({id: _id})}>
				<button class="material-icons" style={{color: 'rgb(148, 150, 151)'}}>
					delete
				</button>
			</td>
		</tr>
	);
};

const mapState = (state) => ({userState: state.users.items, messages: state.users.messages, errorMessages: state.users.errorMessages, successUpdate: state.users.successUpdate});

const mapDispatch = (dispatch) => {
	return {
		updateUser: (payload) => {
			dispatch({
				type: actions.UPDATE_USER,
				payload,
			});
		},
		deleteUser: (payload) => {
			dispatch({
				type: actions.DELETE_USER,
				payload,
			});
		},
	};
};

export default connect(mapState, mapDispatch)(Td);

import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {UserContext} from '../store/context/ContextManager';
import {connect} from 'react-redux';
import {actions} from '../actions';

const Td = ({metaData, data, updateUser, successUpdate, deleteUser, updateModal, userState}) => {
	const {match} = metaData;
	const [editable, setEditable] = useState(false);
	const url = match.url;
	const {name, avatar, id} = data;
	const {theme} = useContext(UserContext);
	const updateUserName = (e) => {
		e.preventDefault();
		updateUser({
			id,
			newName: document.querySelector(`#UID-${id}`).value,
		});
		if (successUpdate) setEditable(false);
	};

	const editInput = !editable ? (
		name
	) : (
		<div>
			<input id={`UID-${id}`} type="text" defaultValue={name} style={{backgroundColor: '#ffeeef'}} className="m-2 p-2" />
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
			<td className={theme}>
				<Link to={`${url}/${id}`}>
					<i className="material-icons">link</i>
				</Link>
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
		updateModal: (payload) => {
			dispatch({
				type: actions.UPDATE_MODAL,
				payload,
			});
		},
	};
};

export default connect(mapState, mapDispatch)(Td);

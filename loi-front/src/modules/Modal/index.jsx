import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {actions} from '../store/actions';
import Register from '../auth/Register';
import Login from '../auth/Login';
import EditUser from '../User/EditUser';
const Modals = ({modal, updateModal}) => {
	const currentComponent = (modal) => {
		let result = '';
		switch (modal.component) {
			case 'Register':
				result = <Register />;
				break;
			case 'Login':
				result = <Login />;
				break;
			case 'EditUser':
				result = <EditUser userData={modal.userData} name="data" />;
				break;

			default:
				break;
		}
		return result;
	};
	const ltrStyle = {'direction': 'ltr', 'text-align': 'left', 'zIndex': 9999};
	const rtlStyle = {'direction': 'rtl', 'text-align': 'right', 'zIndex': 9999};
	return (
		<div style={modal.component === 'EditUser' ? rtlStyle : ltrStyle}>
			<div className={`modal-wrapper modalStatus-${modal.status === true ? 'show' : 'hidden'}`}>
				<div className="modal-overlay">
					<button className="btn btn-danger btn-sm" onClick={(e) => updateModal({status: false})}>
						x
					</button>
					{currentComponent(modal)}
				</div>
			</div>
		</div>
	);
};

const mapState = (state) => ({modal: state.modal.items});
const mapDispatch = (dispatch) => {
	return {
		updateModal: (payload) => {
			dispatch({
				type: actions.UPDATE_MODAL,
				payload,
			});
		},
	};
};

export default connect(mapState, mapDispatch)(Modals);

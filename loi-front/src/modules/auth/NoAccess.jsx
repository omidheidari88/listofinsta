import React from 'react';
import {connect} from 'react-redux';
import {actions} from '../store/actions';

const NoAccess = ({renderModal, msg}) => {
	const rtlStyle = {'direction': 'rtl', 'text-align': 'right', 'zIndex': 9999};

	return (
		<div className="limiter">
			<div className="container-login100 bg-auth-access">
				<div className="wrap-login100 p-t-30 p-b-50">
					<div> {msg}</div>
					<div className="container-login100-form-btn m-t-30 ">
						<button type="submit" className="login100-form-btn" onClick={() => renderModal({status: true, component: 'Register'})}>
							Register
						</button>
					</div>
					<br />
					<div className="container-login100-form-btn  ">
						<button type="submit" className="login100-form-btn" onClick={() => renderModal({status: true, component: 'Login'})}>
							Login
						</button>
					</div>
					<br />
					<br />
				</div>
			</div>
		</div>
	);
};

const mapDispatch = (dispatch) => {
	return {
		renderModal: (payload) => {
			dispatch({
				type: actions.UPDATE_MODAL,
				payload,
			});
		},
	};
};

export default connect(null, mapDispatch)(NoAccess);

import React, {Component} from 'react';
import {actions} from '../../modules/actions';
import {connect} from 'react-redux';

export class index extends Component {
	render() {
		const {updateModal} = this.props;
		return (
			<div>
				<nav className="fixed-top login100-form-btn" style={{color: 'black'}}>
					<div className=" m-t-2 " style={{color: 'black'}}>
						<button type="submit" style={{color: 'white'}} onClick={(e) => updateModal({status: true, component: 'Register'})}>
							List of Insta
						</button>
					</div>

					{/* <button className="navbar-brand  centered " style={logo}>
						<span>list of insta</span>
					</button> */}

					{/* <a href="/" className="btn btn-primary navbar-right-top m-2  btn-icon">
						<i className="material-icons">home</i>
						<span>خانه</span>
					</a>

					<a href="/auth/logout" className="btn btn-danger navbar-right-top m-2 btn-icon">
						<i className="material-icons">lock_open</i>
						<span>خروج</span>
					</a> */}
				</nav>
			</div>
		);
	}
}

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
export default connect(null, mapDispatch)(index);

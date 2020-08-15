import React from 'react';
import {connect} from 'react-redux';
import {actions} from '../actions';
const Login = ({updateModal}) => {
	const postItems = (e) => {
		e.preventDefault();
		const form = document.querySelector('#form');
		const formsItem = {
			email: form.email.value,
			password: form.password.value,
		};
		return formsItem;
	};

	return (
		<div className="limiter">
			<div className="container-login100" style={{'background-image': "url('/assets/images/6771.jpg"}}>
				<div className="wrap-login100">
					<span className="login100-form-title  ">Login</span>
					<form id="form" className="login100-form validate-form p-b-33 p-t-5" onSubmit={(e) => postItems(e)}>
						<div className="wrap-input100 validate-input" data-validate="Enter username">
							<input type="email" className="input100" name="email" id="email" placeholder="username" /> {/*value={typeof 'email' != 'undefined' ? 'email' : ''} */}
							<span className="focus-input100" data-placeholder="&#xe82a;"></span>
						</div>
						<div className="wrap-input100 validate-input" data-validate="Enter password">
							<input type="password" className="input100" name="password" id="password" placeholder="password" />
							<span className="focus-input100" data-placeholder="&#xe80f;"></span>
						</div>
						<div className="container-login100-form-btn m-t-32 login-customize">
							<button type="submit" className="login100-form-btn">
								Login
							</button>
						</div>
						<div className="container-login100-form-btn m-t-12 login-customize">
							<span className="login-with m-b-10">Or</span>
							<div className="container-login100-form-btn">
								<div className="login-with m-b-10"> Sign up</div>
							</div>
							<div>
								<a href="/auth/google" className="btn btn-outline-danger btn-social btn-google  btn-icon m-l-2">
									<i className="fa fa-google"></i>
								</a>
								<a href="/auth/google" className="btn btn-outline-danger btn-social btn-apple btn-icon m-l-2">
									<i className="fa fa-apple"></i>
								</a>
								<a href="/auth/google" className="btn btn-outline-danger btn-social btn-facebook btn-icon m-l-2">
									<i className="fa fa-facebook"></i>
								</a>
								<a href="/auth/google" className="btn btn-outline-danger btn-social btn-twitter btn-icon m-l-2">
									<i className="fa fa-twitter"></i>
								</a>
							</div>
						</div>
						<div className="login110-form p-b-33 p-t-5 mt-4">
							<p className="mt-3">
								Remember me
								<input id="remember" type="checkbox" name="remember" />
							</p>
							<p className="mt-3">
								Forgot Password?
								<a href="/auth/forgetpassword"> Click here</a>
							</p>
							<p className="mt-3">Don't Have a account?</p>
						</div>
					</form>
					<button className="btn btn-info" onClick={() => updateModal({status: true, component: 'Register'})}>
						Sign up
					</button>
				</div>
			</div>
		</div>
	);
};

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

export default connect(null, mapDispatch)(Login);

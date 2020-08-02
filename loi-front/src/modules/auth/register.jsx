import React from 'react';

const Register = ({changeType, item, email, password, confpass, first_name, last_name}) => {
	const postItems = (e) => {
		e.preventDefault();
		const form = document.querySelector('#form');
		const formsItem = {
			first_name: form.first_name.value,
			last_name: form.last_name.value,
			email: form.email.value,
			password: form.password.value,
			confpass: form.confpass.value,
		};
		return item(formsItem);
	};
	return (
		<div className="limiter">
			<div className="container-login100 bg-auth">
				<div className="wrap-login100 p-t-30 p-b-50">
					<span className="login100-form-title p-b-41">Register</span>
					<form id="form" className="login100-form validate-form p-b-33 p-t-5" onSubmit={(e) => postItems(e)}>
						<div className="wrap-input100 validate-input" data-validate="Enter firstname">
							<input type="text" className="input100" name="first_name" id="first_name" placeholder="first name" /> {/*value={typeof first_name != 'undefined' ? first_name : ''}*/}
							<span className="focus-input100" data-placeholder="&#xe82a;"></span>
						</div>
						<div className="wrap-input100 validate-input" data-validate="Enter lastname">
							<input type="text" className="input100" name="last_name" id="last_name" placeholder="last name" />
							<span className="focus-input100" data-placeholder="&#xe82a;"></span>
						</div>
						<div className="wrap-input100 validate-input" data-validate="Enter email">
							<input type="email" className="input100" name="email" id="email" placeholder="email" />
							<span className="focus-input100" data-placeholder="&#xe818;"></span>
						</div>
						<div className="wrap-input100 validate-input" data-validate="Enter password">
							<input type="password" className="input100" name="password" id="password" placeholder="password" />
							<span className="focus-input100" data-placeholder="&#xe80f;"></span>
						</div>
						<div className="wrap-input100 validate-input" data-validate="Confirm password">
							<input type="password" className="input100" name="confpass" id="confpass" placeholder="confirm password" />
							<span className="focus-input100" data-placeholder="&#xe80f;"></span>
						</div>
						<div className="wrap-input100 validate-input">{/* <%- recaptcha %> */}</div>
						<div className="container-login100-form-btn m-t-32">
							<button type="submit" className="login100-form-btn">
								Register
							</button>
						</div>
					</form>
					<div className="login110-form p-b-33 p-t-5 mt-4">
						<p className="mt-3">
							Have a account?
							<button className="btn btn-info" onClick={() => changeType('login')}>
								Login
							</button>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;

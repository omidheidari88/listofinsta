import React, {Component} from 'react';

export class index extends Component {
	render() {
		return (
			<div className="dashboard-header ">
				<nav className="navba fixed-top bg-warning">
					<a className="navbar-brand btn-warning centered" href="index.html">
						<span>admin pannel</span>
						<i className="material-icons">admin_panel_settings</i>
					</a>

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

export default index;

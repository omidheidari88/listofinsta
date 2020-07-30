import React, {Component} from 'react';
export class index extends Component {
	render() {
		return (
			<div className="dashboard-header ">
				<nav className="navba fixed-top login100-form-btn" style={{color: 'black'}}>
					<div className=" m-t-32 " style={{color: 'black'}}>
						<button type="submit" style={{color: 'white'}}>
							List Of Insta
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

export default index;

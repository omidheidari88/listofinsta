import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {sss} from '../../Partials/style';

export class index extends Component {
	render() {
		return (
			<div>
				<div className="nav-left-sidebar sidebar-dark ml-0 " style={sss}>
					<div className="menu-list mt-2 ">
						<nav className="navbar navbar-expand-lg navbar-light">
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>

							<div className="collapse navbar-collapse" id="navbarNav">
								<ul className="navbar-nav flex-column pr-0">
									<li className="nav-item">
										<Link to="/">
											<button className="nav-link">
												<i className="material-icons">dashboard</i>
												داشبورد
											</button>
										</Link>
									</li>
									<li className="nav-item">
										<button className="nav-link" data-toggle="collapse" aria-expanded="false" data-target="#submenu-2" aria-controls="submenu-2">
											<i className="material-icons">school</i>دوره ها
										</button>
										<div id="submenu-2" className="collapse submenu">
											<ul className="nav flex-column">
												<li className="nav-item">
													<Link to="/course/add">
														<button className="nav-link">ایجاد دوره جدید</button>
													</Link>
												</li>
												<li className="nav-item">
													<Link to="/course">
														<button className="nav-link">
															{/* NOTE when we don't use react router  onClick={(e) => check('course')} */}
															مدیریت دوره ها
														</button>
													</Link>
												</li>
											</ul>
										</div>
									</li>
									<li className="nav-item">
										<button className="nav-link" data-toggle="collapse" aria-expanded="false" data-target="#submenu-3" aria-controls="submenu-3">
											<i className="material-icons">shopping_cart</i>محصولات
										</button>
										<div id="submenu-3" className="collapse submenu">
											<ul className="nav flex-column">
												<li className="nav-item">
													<Link to="/product/add">
														<button className="nav-link">ایجاد محصول جدید</button>
													</Link>
												</li>
												<li className="nav-item">
													<Link to="/product">
														<button className="nav-link">مدیریت محصول ها</button>
													</Link>
												</li>
											</ul>
										</div>
									</li>
									<li className="nav-item ">
										<button className="nav-link" data-toggle="collapse" aria-expanded="false" data-target="#submenu-4" aria-controls="submenu-4">
											<i className="material-icons">account_circle</i>کاربران
										</button>
										<div id="submenu-4" className="collapse submenu">
											<ul className="nav flex-column">
												<li className="nav-item">
													<Link to={'/user'}>لیست کاربران</Link>
												</li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		);
	}
}

export default index;

import React, {Component} from 'react';

export class index extends Component {
	render() {
		const {render} = this.props;
		const check = (input) => {
			render(input);
		};
		return (
			<div>
				<div className="nav-left-sidebar sidebar-dark ml-0 ">
					<div className="menu-list mt-2 ">
						<nav className="navbar navbar-expand-lg navbar-light">
							<a className="d-xl-none d-lg-none" href="#/">
								داشبورد
							</a>
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarNav">
								<ul className="navbar-nav flex-column pr-0">
									<li className="nav-item">
										<button className="btn btn-link nav-link border-0" onClick={(e) => check('all')}>
											<i className="material-icons">account_circle</i>داشبورد<span className="badge badge-success">10</span>
										</button>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="/#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-2" aria-controls="submenu-2">
											<i className="material-icons">school</i>دوره ها
										</a>
										<div id="submenu-2" className="collapse submenu">
											<ul className="nav flex-column">
												<li className="nav-item">
													<button className="btn btn-link nav-link border-0" onClick={(e) => check('addCourse')}>
														ایجاد دوره جدید
													</button>
												</li>
												<li className="nav-item">
													<button className="btn btn-link nav-link border-0" onClick={(e) => check('course')}>
														مدیریت دوره ها
													</button>
												</li>
											</ul>
										</div>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="/#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-3" aria-controls="submenu-3">
											<i className="material-icons">shopping_cart</i>محصولات
										</a>
										<div id="submenu-3" className="collapse submenu">
											<ul className="nav flex-column">
												<li className="nav-item">
													<button className="btn btn-link nav-link border-0" onClick={(e) => check('addProduct')}>
														ایجاد محصول جدید
													</button>
												</li>
												<li className="nav-item">
													<button className="btn btn-link nav-link border-0" onClick={(e) => check('product')}>
														مدیریت محصول ها
													</button>
												</li>
											</ul>
										</div>
									</li>
									<li className="nav-item ">
										<a className="nav-link" href="/#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-4" aria-controls="submenu-4">
											<i className="material-icons">monetization_on</i>صورتحساب
										</a>
										<div id="submenu-4" className="collapse submenu">
											<ul className="nav flex-column">
												<li className="nav-item">
													<a className="nav-link" href="/admin/influencer-profile">
														فاکتورها
													</a>
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

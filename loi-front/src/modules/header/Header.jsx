import React from 'react';

function Header({render}) {
	return (
		<div className="row">
			<div className="col">
				<div className="card">
					<div className="card-header">
						{/* if( typeof user!='undefined' ||check){  */}
						<a href="/admin" className="btn btn-warning  pull-left   btn-icon">
							<i className="material-icons">admin_panel_settings</i>
							<span>پنل ادمین</span>
						</a>

						<span>
							{' '}
							شما هنوز در سایت
							<a href="/auth/register" className="btn btn-outline-secondary  btn-icon m-r-5">
								<i className="material-icons">how_to_reg</i>
								<span>ثبت نام</span>
							</a>{' '}
							یا{' '}
							<a href="/auth/login" className="btn btn-outline-info  btn-icon ">
								<i className="material-icons">lock_open</i>
								<span>ورود</span>
							</a>{' '}
							نکرده اید
						</span>
					</div>
					<div className="card-body">
						<div className="actions">
							<button onClick={(e) => render('list')} className="btn btn-outline-primary btn-icon m-l-5 ">
								<i className="material-icons">list</i>
								وظایف
							</button>
							<button onClick={(e) => render('course')} className="btn btn-outline-secondary btn-icon m-l-5">
								<i className="material-icons">school</i>
								دوره ها
							</button>
							{/* if( typeof user!='undefined' ||check){ */}
							<a href="/auth/logout" className="btn btn-outline-danger  btn-icon">
								<i className="material-icons">exit_to_app</i>
								<span>خروج</span>
							</a>
							{/* } */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;

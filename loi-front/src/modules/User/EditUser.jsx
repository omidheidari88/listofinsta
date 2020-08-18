import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {actions} from '../store/actions';
const EditUserList = ({userData, updateUser, name}) => {
	const [editable, setEditable] = useState(false);
	const updateUserData = (e) => {
		e.preventDefault();
		const form = document.querySelector('#validationform');
		const formsItem = {
			id: userData._id,
			username: form.username.value,
			email: form.email.value,
			// price: form.task_price.value,
			// phone: form.task_mobile.value,
			// status: form.task_status.value,
		};
		return updateUser(formsItem);
	};

	return (
		<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{padding: '0px'}}>
			<div className="card">
				<h5 className="card-header"> user ID :{userData._id} </h5>
				<div className="card-body">
					<form id="validationform" data-parsley-validate="" novalidate="" action="/admin/edit/ course.course_id ?method=POST" method="POST" enctype="multipart/form-data">
						<div className="form-group row">
							<div className="col">
								<label for="username" className="control-label font-weight-bold">
									نام کاربر
								</label>
								<input type="text" className="form-control" name="username" id="username" defaultValue={userData.name} />
							</div>
						</div>
						<div className="form-group row">
							<div className="col">
								<label for="type" className="control-label font-weight-bold font-weight-bold">
									نوع دوره
								</label>
								<select name="type" id="type" className="form-control">
									<option value="vip">اعضای ویژه</option>
									<option value="cash">نقدی</option>
									<option value="free">رایگان</option>
								</select>
							</div>
						</div>
						<div className="form-group row">
							<div className="col">
								<label for="email" className="control-label font-weight-bold">
									ایمیل
								</label>
								<input type="email" className="form-control" name="email" id="email" defaultValue={userData.email} />
							</div>
						</div>
						<div className="form-group row">
							<div className="col">
								<label for="time" className="control-label font-weight-bold">
									زمان
								</label>
								<input type="text" className="form-control" name="time" id="time" value="course.time" />
							</div>
						</div>
						<div className="form-group row">
							<div className="col">
								<label for="images" className="control-label font-weight-bold">
									تصویر دوره
								</label>

								<input type="file" className="form-control" name="images" id="images" placeholder="تصویر مقاله را وارد کنید" />
							</div>
						</div>

						<div className="form-group row">
							<div className="col-sm-3">
								size
								<label className="control-label">
									<a href="#/">
										<img src={userData.avatar} alt="" width="100%" />
									</a>
								</label>
							</div>
						</div>

						<div className="form-group row">
							<div className="col">
								<label for="price" className="control-label font-weight-bold">
									قیمت
								</label>
								<input type="text" className="form-control" name="price" id="price" value="course.price" />
							</div>
							<div className="col">
								<label for="tags" className="control-label font-weight-bold">
									تگ ها
								</label>
								<input type="text" className="form-control" name="tags" id="tags" value="course.tags" />
							</div>
						</div>

						<div className="form-group row text-right">
							<div className="col col-sm-10 col-lg-9 offset-sm-1 offset-lg-0">
								<button className="material-icons btn btn-success btn-sm m-l-2" onClick={(e) => updateUserData(e)}>
									check ارسال
								</button>
								<button className="material-icons btn btn-danger btn-sm " onClick={(e) => setEditable(false)}>
									close لغو
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

const mapDispatch = (dispatch) => {
	return {
		updateUser: (payload) => {
			dispatch({
				type: actions.UPDATE_USER,
				payload,
			});
		},
	};
};

export default connect(null, mapDispatch)(EditUserList);

//NOTE
// EditUserList.prototype = {
// 	name: PropTypes.func.isRequired,
// };

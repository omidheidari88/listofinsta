import React from 'react';
import {getCategories} from '../../Utility/Category';
import {connect} from 'react-redux';
import {actions} from '../store/actions';
import {list} from '../../Partials/style';
const AddCourse = ({addCourse}) => {
	// const categories = getCategories();
	const saveHandler = (e) => {
		e.preventDefault();
		const form = document.querySelector('#courseFormID');
		const formsItem = {
			title: form.title.value,
			type: form.type.value,
			descript: form.descript.value,
			time: form.time.value,
			images: form.images.value,
			price: form.price.value,
			tags: form.tags.value,
		};

		return addCourse(formsItem);
	};

	return (
		<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
			<div className="card" style={list}>
				<h5 className="card-header">ایجاد دوره جدید</h5>
				<div className="card-body">
					<form id="courseFormID">
						<div className="form-group row">
							<div className="col">
								<label htmlFor="title" className="control-label font-weight-bold">
									عنوان دوره
								</label>
								<input type="text" className="form-control" name="title" id="title" placeholder="عنوان را وارد کنید" />
							</div>
						</div>
						<div className="form-group row">
							<div className="col">
								<label htmlFor="type" className="control-label font-weight-bold font-weight-bold">
									نوع دوره
								</label>
								<select name="type" id="type" className="form-control">
									<option defaultValue="vip">اعضای ویژه</option>
									<option defaultValue="cash">نقدی</option>
									<option defaultValue="free" selected>
										رایگان
									</option>
								</select>
							</div>
						</div>
						<div className="form-group row">
							<div className="col">
								<label htmlFor="descript" className="control-label font-weight-bold">
									متن
								</label>
								<textarea rows="5" className="form-control" name="descript" id="descript" placeholder="متن مقاله وارد کنید"></textarea>
							</div>
						</div>
						<div className="form-group row">
							<div className="col">
								<label htmlFor="time" className="control-label font-weight-bold">
									زمان
								</label>
								<input type="text" className="form-control" name="time" id="time" placeholder="زمان را وارد کنید" />
							</div>
						</div>
						<div className="form-group row">
							<div className="col">
								<label htmlFor="images" className="control-label font-weight-bold">
									تصویر دوره
								</label>
								<input type="file" className="form-control" name="images" id="images" placeholder="تصویر مقاله را وارد کنید" />
							</div>
						</div>
						<div className="form-group row">
							<div className="col">
								<label htmlFor="price" className="control-label font-weight-bold">
									قیمت
								</label>
								<input type="text" className="form-control" name="price" id="price" placeholder="قیمت ها را وارد کنید" />
							</div>
							<div className="col">
								<label htmlFor="tags" className="control-label font-weight-bold">
									تگ ها
								</label>
								<input type="text" className="form-control" name="tags" id="tags" placeholder="تگ ها را وارد کنید" />
							</div>
						</div>

						<div className="form-group row text-right">
							<div className="col col-sm-10 col-lg-9 offset-sm-1 offset-lg-0">
								<button onClick={(e) => saveHandler(e)} type="submit" className="btn btn-success">
									ذخیره اطلاعات
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
		addCourse: (payload) => {
			dispatch({
				type: actions.ADD_COURSE,
				payload,
			});
		},
	};
};

export default connect(null, mapDispatch)(AddCourse);

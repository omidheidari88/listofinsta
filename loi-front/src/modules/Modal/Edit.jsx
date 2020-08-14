import React from 'react';

const Edit = () => {
	return (
		<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{padding: '0px'}}>
			<div className="card">
				<h5 className="card-header">ویرایش دوره</h5>
				<div className="card-body">
					<form id="validationform" data-parsley-validate="" novalidate="" action="/admin/edit/ course.course_id ?method=POST" method="POST" enctype="multipart/form-data">
						<div className="form-group row">
							<div className="col">
								<label for="title" className="control-label font-weight-bold">
									عنوان دوره
								</label>
								<input type="text" className="form-control" name="title" id="title" value="course.title" />
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
								<label for="descript" className="control-label font-weight-bold">
									متن
								</label>
								<textarea rows="5" className="form-control" name="descript" id="descript">
									course.descript
								</textarea>
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
									<a href="<%-image">
										<img src="<%-image" alt="" width="50%" />
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
								<button type="submit" className="btn btn-space btn-primary">
									ارسال
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Edit;

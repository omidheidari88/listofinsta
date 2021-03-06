import React from 'react';
import {getCategories} from '../../Utility/Category';
import {connect} from 'react-redux';
import {actions} from '../store/actions';
import moment from 'jalali-moment';
const Add = ({addProduct}) => {
	const categories = getCategories();
	const saveHandler = (e) => {
		e.preventDefault();
		const form = document.querySelector('#productFormID');
		const formsItem = {
			date: moment(form.task_date.value, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD'), //tabdile miladi be shamsi
			category: form.task_category.value,
			price: form.task_price.value,
			phone: form.task_mobile.value,
			status: form.task_status.value,
		};
		return addProduct(formsItem);
	};
	return (
		<div>
			<div className="row">
				<div className="col">
					<div className="card list">
						<div className="card-header">ایجاد محصول جدید</div>
						<div className="card-body">
							<form id="productFormID">
								<div className="form-group">
									<label htmlFor="task_category">دسته بندی</label>
									<select className="form-control" name="task_category" id="task_category">
										{Object.keys(categories).map((key) => (
											<option value={key}>{key}</option>
										))}
									</select>
								</div>
								<div className="form-group">
									<label htmlFor="task_price">قیمت</label>
									<input type="text" className="form-control" name="task_price" id="task_price" placeholder="مثال : 45000" />
								</div>
								<div className="form-group">
									<label htmlFor="task_mobile">موبایل</label>
									<input type="text" className="form-control" name="task_mobile" id="task_mobile" placeholder="مثال : 09121231234" />
								</div>
								<div className="form-group">
									<label htmlFor="task_date">تاریخ</label>
									<input type="date" className="form-control" name="task_date" id="task_date" placeholder="عنوان وظیفه" />
								</div>
								<div className="form-group">
									هزینه
									<label className="switch">
										<input type="radio" className="switch" name="task_status" id="task_status" defaultChecked={true} value="1" />
										<span className="slider round"></span>
									</label>
									درآمد
									<br />
									<label className="switch">
										<input type="radio" className="switch" name="task_status" id="task_status" value="2" />
										<span className="slider round"></span>
									</label>
								</div>
								<button onClick={(e) => saveHandler(e)} type="submit" className="btn btn-success">
									ذخیره اطلاعات
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapDispatch = (dispatch) => {
	return {
		addProduct: (payload) => {
			dispatch({
				type: actions.ADD_PRODUCT,
				payload,
			});
		},
	};
};

export default connect(null, mapDispatch)(Add);

//NOTE if we wanted to use useConntext instead of saga
// import {StateContext} from '../store/context/ContextManager';
// const [state, dispatch] = useContext(StateContext);
// dispatch({type: 'add', payload: formsItem});

//NOTE tabdile shamsi be miladi
// date: moment.from(form.task_date.value, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')

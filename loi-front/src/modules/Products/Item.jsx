import React, {Component} from 'react';
import Toman from '../../Partials/Currency/Toman';
import Phone from '../../Partials/Phone/Phone';
import {getCategoryByKey} from '../../Utility/Category';
import Axios from '../../Ajax/Axios';
export class Item extends Component {
	constructor() {
		super();
		// this.state = {
		// 	items: [],
		// };
		this.axios = new Axios();
	}
	deleteItem = (id) => {
		// const url = `product/delete/${id}`;
		// this.axios.get(url).then((res) => {
		// 	this.setState({
		// 		items: res.data.item,
		// 	});
		// });
	};
	editItem = (id) => {
		// const url = `product/edit/${id}`;
	};
	render() {
		const {date, category, price, phone, status, product_id} = this.props;
		return (
			<tr>
				<td>{product_id}</td>
				<td>{getCategoryByKey(category)}</td>
				<td>
					<Toman amount={price} />
				</td>
				<td>
					{/* <Phone number={phone} /> */}
					{date}
				</td>
				<td>
					<span className={`badge badge-${status > 1 ? 'success' : 'danger'}`}>{status > 1 ? 'درآمد' : 'هزینه'}</span>
				</td>
				<td>
					<button onClick={this.editItem(product_id)} className="btn btn-link border-0 m-0 p-2">
						<i className="material-icons">edit</i>
					</button>
					<button onClick={this.deleteItem(product_id)} className="btn btn-link border-0 m-0 p-0">
						<i className="material-icons">delete</i>
					</button>
				</td>
			</tr>
		);
	}
}

export default Item;

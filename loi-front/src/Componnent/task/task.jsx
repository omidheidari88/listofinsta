import React, {Component} from 'react';
import Toman from '../../Partials/Currency/Toman';
import Phone from '../../Partials/Phone';
import {getCategoryByKey} from '../../Utility/Category';
export class Item extends Component {
	render() {
		const {date, category, price, phone, status, task_id} = this.props;
		return (
			<tr>
				<td>{date}</td>
				<td>{getCategoryByKey(category)}</td>
				<td>
					<Toman amount={price} />
				</td>
				<td>
					<Phone number={phone} />
				</td>
				<td>
					<span className={`badge badge-${status > 1 ? 'success' : 'danger'}`}>{status > 1 ? 'درآمد' : 'هزینه'}</span>
				</td>
				<td>
					<a href="/#">
						<i className="material-icons">edit</i>
					</a>
					<a href={`http://localhost:5000/tasks/delete/${task_id}`}>
						<i className="material-icons">delete</i>
					</a>
				</td>
			</tr>
		);
	}
}

export default Item;

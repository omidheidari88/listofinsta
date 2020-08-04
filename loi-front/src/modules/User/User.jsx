import React from 'react';
import {Link} from 'react-router-dom';
import userContext from '../../Utility/userContext';
const Td = ({metaData, data}) => {
	const {match} = metaData;
	const url = match.url;

	const {id, name, avatar} = data;

	return (
		<userContext.Consumer>
			{(value) => (
				<tr>
					<td className={value}>
						<img style={{width: '60px', height: '60px'}} src={avatar} alt="" />
					</td>
					<td className={value}>{name}</td>
					<td className={value}>
						<Link to={`${url}/${id}`}>
							<i className="material-icons">link</i>
						</Link>
					</td>
				</tr>
			)}
		</userContext.Consumer>
	);
};

export default Td;

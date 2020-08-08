import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {UserContext} from '../store/ContextManager';

const Td = ({metaData, data}) => {
	const {match} = metaData;
	const url = match.url;
	const {id, name, avatar} = data;
	const {theme} = useContext(UserContext);

	return (
		<tr>
			<td className={theme}>
				<img style={{width: '60px', height: '60px'}} src={avatar} alt="" />
			</td>
			<td className={theme}>{name}</td>
			<td className={theme}>
				<Link to={`${url}/${id}`}>
					<i className="material-icons">link</i>
				</Link>
			</td>
		</tr>
	);
};

export default Td;

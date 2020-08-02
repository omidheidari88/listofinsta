import React, {useState} from 'react';

const Pagination = ({totalPage, currentPage, changeCurrentPage}) => {
	const [page, setPage] = useState(currentPage);

	const links = [...new Array(totalPage).keys()].map((item) => {
		item++;
		return (
			<li className={`page-item page-${item === page ? 'current' : ''}`}>
				<a
					className="page-link"
					href="#/"
					onClick={(e) => {
						setPage(item);
						changeCurrentPage(e, item);
					}}>
					{item}
				</a>
			</li>
		);
	});
	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination">
				<li className="page-item">
					<a className="page-link" href="#/" aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
						<span className="sr-only">Previous</span>
					</a>
				</li>
				{links}
				<li className="page-item">
					<a className="page-link" href="#/" aria-label="Next">
						<span aria-hidden="true">&raquo;</span>
						<span className="sr-only">Next</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;

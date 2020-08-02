import React from 'react';

const Modal = ({show, body, closeModal}) => {
	return (
		<div className={`modal-wrapper modalStatus-${show === true ? 'show' : 'hidden'}`}>
			<button className="btn btn-danger" onClick={(e) => closeModal(e)}>
				X
			</button>
			<div className="modal-overlay">{body}</div>
		</div>
	);
};

export default Modal;

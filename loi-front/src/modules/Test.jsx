import React, {useReducer} from 'react';

const Test = () => {
	const initialState = {items: []};
	const reducer = (state, action) => (action.type === 'add' ? {...state, items: [...state.items, action.payload]} : state);
	const [state, dispatch] = useReducer(reducer, initialState);
	const renderItems = state.items.map((item) => <h1>{item.name}</h1>);
	return (
		<div>
			<div className="wrapper">
				<div className="container">
					<div className="row m-t-50">
						<div className="col">
							<div className="card">
								<div className="card-header">
									<button className="btn btn-block btn-info m-t-50" onClick={() => dispatch({type: 'add', payload: {name: 'ali'}})}>
										action
									</button>
									<div className="card-body">
										<div className="text-center m-t-10">{renderItems}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Test;

// NOTE  action & state is like bind to this:
// const state = {items: [{name: 'ali'}]};
// const action = {type: 'add', payload: {name: 'ali'}};

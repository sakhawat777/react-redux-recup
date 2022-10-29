import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	decrementCounter,
	incrementCounter,
	resetCounter,
} from '../redux/actions/CounterAction';

const Counter = () => {
	// call state
	const count = useSelector((state) => state.count);
	// actions dispatch
	const dispatch = useDispatch();
	const handleIncrement = () => {
		dispatch(incrementCounter());
	};
	const handleDecrement = () => {
		dispatch(decrementCounter());
	};
	const handleReset = () => {
		dispatch(resetCounter());
	};
	return (
		<div>
			<h2>Counter App</h2>
			<h1>Count: {count}</h1>
			<button onClick={handleIncrement}>Increment</button>
			<button onClick={handleDecrement}>Decrement</button>
			<button onClick={handleReset}>Reset</button>
		</div>
	);
};

export default Counter;

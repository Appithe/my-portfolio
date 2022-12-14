import React from 'react';
import PropTypes from 'prop-types';

export const NavButton = (props) => {

	const {
		children = null,
		handleClick = () => {},
		message = 'Button',
	} = props;

	return (
		<button onClick={handleClick} className='w-fit h-[50px] p-3 col-start-11 flex justify-center items-center border-2 border-transparent hover:rounded hover:border-2 hover:border-charcoal'>
			{
				children || <span className='font-Libre text-button-text'>{message}</span>
			}
		</button>
	);
};

NavButton.propTypes = {
	message: PropTypes.string,
	handleClick: PropTypes.func,
	children: PropTypes.node,
};

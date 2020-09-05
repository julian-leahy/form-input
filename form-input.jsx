import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ label, onChange, ...rest }) => {
	return (
		<div className='form-input'>
			<input onChange={onChange} {...rest} />
			<label>{label}</label>
		</div>)
}

export default FormInput;


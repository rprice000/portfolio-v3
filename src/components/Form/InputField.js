import React from 'react';

const InputField = (props) => {

    const { handleChange, label, name, type, value } = props;

    return (
        <div className="mb-5">
            <label className="" htmlFor={name}>{label}</label>
            <input className="" type={type} onChange={handleChange} value={value} name={name} required />
        </div>
    )
}

export default InputField;
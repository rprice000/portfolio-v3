import React from 'react';

const TextAreaField = (props) => {
    const {handleChange, label, name } = props;
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <textarea onChange={handleChange} name={name}></textarea>
        </div>
    )
}

export default TextAreaField;
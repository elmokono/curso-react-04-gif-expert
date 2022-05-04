import React, { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    //change text
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        console.log('- handleInputChange');
    }

    //callback parent component
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('- handleSubmit', inputValue);

        if (inputValue.trim().length < 3)
            return;

        setCategories(x => [inputValue.trim(), ...x]);
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input placeholder='Input Category Name' type="text" value={inputValue} onChange={handleInputChange}></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
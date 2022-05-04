import React, { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    //change text
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    //callback parent component
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim() === '')
            return;

        setCategories(x => [inputValue.trim(), ...x]);
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='Input Category Name' type="text" value={inputValue} onChange={handleInputChange}></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
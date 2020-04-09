import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

TodoForm.propTypes = {
    onSubmit: PropTypes.func
};

TodoForm.defaultProps = {
    onSubmit: null
}



function TodoForm(props) {
    const { onSubmitForm } = props;
    // const [txtTitle, setTxtTitle] = useState('');
    // const [txtAge, setTxtAge] = useState('');

    const [inputValues, setInputValues] = useState({ txtTitle: '', txtAge: '' });

    function onHandleForm(event) {
        // setTxtTitle(event.target.value);
        // setTxtAge(event.target.value);
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    }

    function onSubmitTodoForm(event) {
        event.preventDefault();
        // const formValues = {
        //     title: txtTitle,
        //     age: txtAge

        // }
        onSubmitForm(inputValues);
        // Reset form
        // setTxtTitle('');
        // setTxtAge('');
        setInputValues({ txtTitle: '', txtAge: '' });
    }

    return (
        <div>
            <form onSubmit={onSubmitTodoForm} className="ui form">
                <div className="field">
                    <label>Name Title</label>
                    <input
                        type="text"
                        name="txtTitle"
                        placeholder="Enter Title"
                        value={inputValues.txtTitle}
                        onChange={onHandleForm}
                    />
                </div>
                <div className="field">
                    <label >Age</label>
                    <input
                        type="text"
                        name="txtAge"
                        placeholder="Enter Age"
                        value={inputValues.txtAge}
                        onChange={onHandleForm}
                    />
                </div>
                <button type="submit" className="ui button primary">Submit</button>
            </form>
        </div>
    );
}

export default TodoForm;
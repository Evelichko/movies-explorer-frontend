import React from 'react';
import './Form.css';

function Form(props) {
    return (
        <div>
            <form className='form'>

                {props.children}

            </form>
        </div>
    )
}

export default Form;
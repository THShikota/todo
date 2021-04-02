import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const NewTodo = ({ onNewTodo }) => {
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    const [value, setvalue] = useState('');

    const erase = () => {
        setvalue('');
    };

    const submit = () => {
        if (onNewTodo) {
            onNewTodo(value);
            erase();
        }
    };

    const onKeyDown = (event) => {
        if (event.which === ENTER_KEY) {
            submit();
        } else if (event.which === ESCAPE_KEY) {
            erase();
        }
    };

    const onChange = (event) => {
        setvalue(event.target.value);
    };

    return (
        <input
            className="new-todo"
            placeholder="O que precisa ser feito?"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
};

NewTodo.propTypes = {
    onNewTodo: PropTypes.func.isRequired,
};
export default NewTodo;

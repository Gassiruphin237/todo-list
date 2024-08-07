import React from 'react';
import '../css/Input.css';
import Button from './Button';

function Input({ label, type, className, value, onChange, onAddTodo }) {
    return (
        <div className={className}>
            {label && <label className='label'>{label}</label>}
            <input type={type} value={value} onChange={onChange} />
            <Button label="Ajouter" type="button" className="Buttton" onClick={onAddTodo} />
        </div>
    );
}

export default Input;

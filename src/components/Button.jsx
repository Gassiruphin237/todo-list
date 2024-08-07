import React from 'react';

function Button({ label, type, className, onClick }) {
    return (
        <button type={type} className={className} onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;

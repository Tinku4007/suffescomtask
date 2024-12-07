import React from 'react';

const Button = ({ label, borderColor, bgColor, color }) => {
    return (
        <button
            className={`px-6 py-3 border rounded-lg text-sm font-medium transition duration-300
                        hover:bg-white hover:text-purple-800`}
            style={{
                borderColor: borderColor || 'white',
                backgroundColor: bgColor || 'transparent',
                color: color || 'white',
            }}
        >
            {label}
        </button>
    );
};

export default Button;

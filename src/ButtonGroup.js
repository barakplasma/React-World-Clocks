import React from 'react';
import './ButtonCSS.css';

const ButtonGroup = (props) => {
    return <div
        className="buttonGroup">
        <button className="removeButton"
                onClick={() => props.remove(props.id)}>Remove
        </button>
        <button className="editButton"
                onClick={() => props.edit(props.id)}>Edit
        </button>
    </div>
};

export default ButtonGroup
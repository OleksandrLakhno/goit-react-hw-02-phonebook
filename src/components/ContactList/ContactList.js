import React from "react";
import PropTypes from 'prop-types';
import l from './ListItem.module.css'; 

function ContactList({ options,onDeleteContactItem }) {
    return (
        <ul>
            {options.map(({ id, name, number }) => (
                <li key={id}>
            <div className={l.item}>
                <p className={ l.nameStyle}>{name + ':'}</p>
                <p className={l.numberStyle}>{number}</p>
                        <button
                            className={l.buttonStyle}
                            type="button"
                            onClick={() => onDeleteContactItem(id)}>
                            Delete
                        </button>
          </div>
        </li>
            ))}
        </ul>
    )
};

ContactList.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number:PropTypes.string.isRequired,
    })),
    onDeleteContactItem:PropTypes.func.isRequired
};

export default ContactList;
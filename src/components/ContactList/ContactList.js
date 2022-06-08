import React from "react";
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

export default ContactList;
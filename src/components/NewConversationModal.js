import React from "react";
import { Link } from "react-router-dom";

const NewConversationModal = ({ contacts, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Select a Contact</h2>
        <ul className="contact-list">
          {contacts.map((contact) => (
            <li key={contact.id}>
              <Link to={`/conversation/${contact.id}`} onClick={onClose}>
                {contact.name}
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default NewConversationModal;

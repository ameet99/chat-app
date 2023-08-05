import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ConversationList = ({ contacts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const messages = useSelector((state) => state.dummyData.messages);

  // get the last message text for a conversation
  const getLastMessageText = (conversationId) => {
    const lastMessage = messages
      .filter((message) => message.conversationId === conversationId)
      .pop();
    return lastMessage?.text || 'No message';
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="conversation-container">
        {filteredContacts.map((contact) => (
          <div key={contact.id} className="conversation-item">
            <Link to={`/conversation/${contact.id}`} className="conversation-link">
              <div className="name-status">
                <div className="status-dot" data-status={contact.online ? 'online' : 'offline'} />
                <div className="contact-name">{contact.name}</div>
              </div>
              <div className="last-message">{getLastMessageText(contact.id)}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationList;

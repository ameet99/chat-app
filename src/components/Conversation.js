import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import dummyData from "../data/dummyData";
import { sendMessage } from '../redux/reducers';

const Conversation = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [newMessage, setNewMessage] = useState("");

  // Use useSelector to get contacts and messages from the Redux store
  const { contacts, messages } = useSelector((state) => state.dummyData);

  const conversationMessages = messages.filter(
    (message) => message?.conversationId === parseInt(id)
  );

    // get the last message text for a conversation
    const getContactName = () => {
      const obj =  contacts.find((obj) => obj.id === parseInt(id))
      return obj.name
    };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!newMessage.trim()) {
      alert('Type Any Message then Send!!')
      return
    }

    // Update the redux state with the new message.
    const newMessageObj = {
      id: messages.length + 1,
      conversationId: parseInt(id),
      text: newMessage,
      sentByMe: true,
      timestamp: Date.now(),
    };

    setNewMessage("");
    // Add the new message to the messages state
    dispatch(sendMessage(parseInt(id), newMessage));
    dummyData.messages.push(newMessageObj);
  };

  const formatTime = (timestamp) => {
    const options = { hour: "numeric", minute: "numeric" };
    return new Date(timestamp).toLocaleString("en-US", options);
  };

  return (
    <div className="conversation-view">
      <h2>Conversation with: {getContactName()}</h2>
      <div className="message-container">
        {conversationMessages.map((message) => (
          <div
            key={`message-${message.id}`}
            className={`message ${message.sentByMe ? "sent" : "received"}`}
          >
            <p>{message.text}</p>
            <span className="timestamp">{formatTime(message.timestamp)}</span>
          </div>
        ))}
      </div>
      <div className="message-input-container">
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Conversation;
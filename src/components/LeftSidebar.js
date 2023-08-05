import React, {useState} from "react";
import { useSelector } from "react-redux";
import ConversationList from './ConversationList';
import NewConversationModal from "./NewConversationModal";

const LeftSidebar = () => {
  const [showModal, setShowModal] = useState(false); // contact list modal

  const { contacts } = useSelector((state) => state.dummyData);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="conversation-list">
      <h2>Conversations</h2>
      <button onClick={handleOpenModal}>New conversation</button>
      <ConversationList contacts={contacts} />
      {showModal && <NewConversationModal contacts={contacts} onClose={handleCloseModal} />}
    </div>
  );
};

export default LeftSidebar;
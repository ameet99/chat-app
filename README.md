# React Chat App
This project is a frontend implementation of a chat application using React. It allows a user to send messages to contacts in a chat-like interface. The app supports searching for conversations by contact name and persisting data using Redux and Redux Persist.

# Setup Project Instructions
1) Clone the repository and navigate to the project directory.
  -> git clone https://github.com/ameet99/chat-app
2) Install the dependencies using npm install.
3) Start the development server using npm start.
4) The app should open in your default browser at http://localhost:3000.


# Project Structure

chat-app/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── assets/
│ │ ├── images/
│ │ └── ...
│ ├── components/
│ │ ├── Conversation.js
│ │ ├── ConversationList.js
│ │ ├── LeftSidebar.js
│ │ ├── NewConversationModal.js
│ ├── reducers/
│ │ ├── store.js
│ │ └── reducer.js
│ ├── data/
│ │ ├── dummyData.js
│ ├── App.js
│ ├── index.js
│ └── styles.css
├── package.json
├── .gitignore
└── README.md
   

# Usage
Click on a conversation in the left sidebar to view and send messages in the right-side view.
To start a new conversation, click the "Create conversation" button and select a contact.
Type your message in the input field at the bottom and click "Send" to send the message.
The app will handle errors and display appropriate notifications.

# Dependencies
React: A JavaScript library for building user interfaces.
React Router: A routing library for React applications.
React Redux: Official React bindings for Redux.
Redux: A predictable state container for JavaScript apps.
Redux Persist: A library to persist and rehydrate a Redux store.

# Deployed URL
https://64ce101e2039342693a4a861--cosmic-selkie-036596.netlify.app/

# Github Repo
https://github.com/ameet99/chat-app

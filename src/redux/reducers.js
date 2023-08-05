import dummyData from '../data/dummyData';


// Action type
const SEND_MESSAGE = "SEND_MESSAGE";

// Action creator
export const sendMessage = (conversationId, text) => ({
  type: SEND_MESSAGE,
  payload: { conversationId, text },
});

// if the data is very less then we should intialize here
const initialDummyData = dummyData;

// Reducer
export const dummyDataReducer = (state = initialDummyData, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const { conversationId, text } = action.payload;
      const newMessage = {
        id: state.messages.length + 1,
        conversationId,
        text,
        sentByMe: true,
        timestamp: Date.now(),
      };
      // update message state
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    default:
      return state;
  }
};

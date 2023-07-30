// // actions.js


export const addMessage = (text, fromUser) => ({
  type: 'ADD_MESSAGE',
  payload: { text, fromUser },
});

export const receiveBotResponse = (response) => ({
  type: 'RECEIVE_BOT_RESPONSE',
  payload: response,
});

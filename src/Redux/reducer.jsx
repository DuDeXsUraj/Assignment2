// reducers.js



const initialState = {
  messages: [],
  text:'',
  fromUser:'',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, { text: action.payload.text, fromUser: action.payload.fromUser }],
      };
    case 'RECEIVE_BOT_RESPONSE':
      return {
        ...state,
        messages: [...state.messages, { text: action.payload, fromUser:false }],
      };
    default:
      return state;
  }
};

export default rootReducer;

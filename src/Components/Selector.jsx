// selectors.js

// Replace "yourReducerName" with the actual name of the reducer containing the "text" and "fromUser" properties.
export const getTextAndFromUser = (state) => ({
    text: state.yourReducerName.text,
    fromUser: state.yourReducerName.fromUser,
  });
  
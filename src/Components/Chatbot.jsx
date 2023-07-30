// // import React, { useRef } from 'react';
// // import { connect } from 'react-redux';
// // import { addMessage } from '../Redux/action';

// const Chatbot = ({ messages, onAddMessage }) => {
//   const inputRef = useRef();

// //   const handleUserMessage = () => {
// //     const text = inputRef.current.value;
// //     if (text.trim() !== '') {
// //       onAddMessage(text, true);
// //       inputRef.current.value = '';
// //     }
// //   };

//   return (
//     <div>
//       {messages.map((message, index) => (
//         <div key={index}>
//           {message.fromUser ? 'User: ' : 'Bot: '}
//           {message.text}
//         </div>
//       ))}
//       <div>
//         <input ref={inputRef} />
//         <button onClick={handleUserMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// // const mapStateToProps = (state) => ({
// //   messages: state.chat.messages,
// // });

// // const mapDispatchToProps = (dispatch) => ({
// //   onAddMessage: (text, fromUser) => dispatch(addMessage(text, fromUser)),
// // });

//  export default connect(mapStateToProps, mapDispatchToProps)(Chatbot);

// ChatDisplay.js

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addMessage } from '../Redux/action';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const ChatDisplay = ({ addMessage }) => {
  // ... (existing component code)
  const [botMessage, setBotMessage] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [show ,setShow] = useState(false)
  const [got,setGot] = useState(true)
  const [process,setProcess] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate initial bot response
    const simulateBotResponse = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setBotMessage("Hello, Welcome to the student info system!");
    };

    simulateBotResponse();
  }, []);

  const handleGotItClick = () => {
    addMessage("Got it!");
    setBotMessage("Enter your Name");
    setShow(true)
    setGot(false)
  };

  const handleUserMessageChange = (event) => {
    setUserMessage(event.target.value);
  };

  const handleUserMessageSubmit = (event) => {
    event.preventDefault();
    addMessage(userMessage);
    if (botMessage === "Enter your Name") {
      setUserName(userMessage);
      setBotMessage("Enter your Age between 27 to 40");
    } else if (botMessage === "Enter your Age between 27 to 40") {
      setUserAge(userMessage);
      addMessage(userMessage); // Add user's age to messages
      setBotMessage("Thank you. In 5 seconds, bot will exit");
      setTimeout(() => {
        // Navigate to Page 3 after the countdown
        navigate("/exit");
      }, 5000);
      // Reset the userMessage state for the next input
      setUserMessage("");
      setProcess(false)
    }
  };

  return (
    <Wrapper>
    <div className="chat-container">
      <div>
        <p className="bot-message">{botMessage}</p>
        {botMessage && got? (
          <button className="got-it-button" onClick={handleGotItClick}>
            Got it!
          </button>
        ) : (
          ''
        )}
      </div>
      <form onSubmit={handleUserMessageSubmit}>
      {show && process ? (
  <label className="input-label">
    {botMessage === "Enter your Name" ? "Name:" : "Age:"}
  </label>
) : (
  ""
)}
{show && process ? (
  botMessage === "Enter your Name" ? (
    <input
      className="input-field"
      type="text"
      value={userMessage}
      onChange={handleUserMessageChange}
    />
  ) : (
    <select
      className="input-field"
      value={userMessage}
      onChange={handleUserMessageChange}
    >
      <option value="">Select Age</option>
      {Array.from({ length: 21 }, (_, index) => 20 + index).map((age) => (
        <option key={age} value={age}>
          {age}
        </option>
      ))}
    </select>
  )
) : (
  ""
)}

        {process && botMessage?<button className="submit-button" type="submit">
          Send
          </button>:''}
      </form>
    </div>
    </Wrapper>
  );
};


// ... (existing code)

const Wrapper = styled.div`
/* ChatDisplay.css */

/* Container for the chat display */
.chat-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  // border: 1px solid #ccc;
  border-radius: 8px;
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Bot message style */
.bot-message {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

/* Got it button style */
.got-it-button {
  padding: 8px 16px;
  font-size: 14px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.got-it-button:hover {
  background-color: #0056b3;
}

/* Form input style */
.input-label {
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.input-field {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

/* Submit button style */
.submit-button {
  padding: 8px 16px;
  font-size: 14px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top:10px;
}

.submit-button:hover {
  background-color: #218838;
}

`
const mapStateToProps = (state) => {
  return {
    chatMessages: state.chatMessages,
  };
};

export default connect(mapStateToProps, { addMessage })(ChatDisplay);


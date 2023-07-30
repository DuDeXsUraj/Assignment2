import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';


const Page1 = () => {
  return (
    <Wrapper>
    <div className="page-container">
      <h1 className="page-title">Enter into Student Info System</h1>
      <Link to="/messages" className="enroll-link">
        <button className="enroll-button">Enroll Now!</button>
      </Link>
    </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
/* Page1.css */

/* Container for the page */
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Ensure the page fills the entire viewport height */
}

/* Title style */
.page-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
}

/* Enroll button style */
.enroll-link {
  text-decoration: none;
}

.enroll-button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.enroll-button:hover {
  background-color: #0056b3;
}

/* Responsive design */
@media screen and (max-width: 768px) {
  /* Adjust the font size for smaller screens */
  .page-title {
    font-size: 1.5rem;
  }

  .enroll-button {
    font-size: 1rem;
  }
}

`
export default Page1;

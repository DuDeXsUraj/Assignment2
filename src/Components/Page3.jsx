// Page3.js

import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Page3 = () => {
  const { text, fromUser } = useSelector((state) => state);

  return (
    <Wrapper>
    <div className="page-container">
      <h1 className="page-heading">
        Your name {text} aged {fromUser} has been added to the student system.
      </h1>
      <Link to="/" className="exit-link">
        You may now exit.
      </Link>
    </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
/* Page3.css */

/* Container for the page */
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Ensure the page fills the entire viewport height */
}

/* Heading style */
.page-heading {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
}

/* Link style */
.exit-link {
  text-decoration: none;
  color: #007bff;
  font-size: 1.2rem;
  transition: color 0.3s;
}

.exit-link:hover {
  color: #0056b3;
}


`
export default Page3;




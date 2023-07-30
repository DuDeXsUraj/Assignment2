import React from 'react';
import Page1 from './Components/Page1';

import ChatDisplay from './Components/ChatDisplay';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page3 from './Components/Page3';





function App() {
  return (

      <>
        <Router>
        <Routes>
        <Route exact path="/" element={<Page1/>} />
        <Route path="/messages" element={<ChatDisplay/>} />
        <Route path="/exit" element={<Page3/>} />
        </Routes>
       </Router>
      </>
  );
}

export default App;

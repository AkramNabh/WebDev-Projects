import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';


const Body = styled.div`
background-color: #121237ff;
`;

const Wrapper = styled.div`
background-color: #192C60ff;

`;

function App() {
  return (
<Router>
    <Navbar />
      <Body>
        <Wrapper>
 {/* here i put the contents under the navBar */}
        </Wrapper>
      </Body>
    </Router>
  );
}

export default App;

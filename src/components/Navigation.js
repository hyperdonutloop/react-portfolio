import React from 'react';
import { Link } from 'react-router-dom';

//styles
import styled from 'styled-components';

const Wrapper = styled.div`
  .navigation {
    display: flex;
    justify-content: flex-end;
    padding-top: 2%;
    padding-bottom: 1%;
    // border: 2px dotted pink;

    .links a {
      padding: 1rem;
      text-decoration: none;
      color: #e2e8f0;
      // margin: 1rem;
      border: 2px solid blue;
    }
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <div className="navigation">
        <div className="links">
          <Link to="/" className="item">Home</Link>
          <Link to="/about" className="item">About</Link>
          <Link to="/projects" className="item">Projects</Link>
          <Link to="/contact" className="item">Contact</Link>
        </div>
      </div>
    </Wrapper>
    
  )
}

export default Navigation;
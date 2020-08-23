import React from 'react';
import styled from 'styled-components';
import ReactTouchEvents from "react-touch-events";

const StyledStartButton = styled.button`
  box-sizing: border-box;

  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 15px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: white;
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
`;

const handleTap = () => {
    console.log("test");
}

const handleSwipe = (direction) => {
    
    switch (direction) {
        case "up":
        case "down":
        case "left":
        case "right":
        
            console.log(`you swiped ${direction}`)
    
    }
}

const TestButton = () => (
    <ReactTouchEvents 
    onTap={handleTap}
    onSwipe={handleSwipe}>
        <StyledStartButton>Test</StyledStartButton>
    </ReactTouchEvents>
);

export default TestButton; 
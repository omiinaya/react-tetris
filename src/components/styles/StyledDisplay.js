import styled from 'styled-components';

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: inline;
  align-items: center;
  margin: 0 0 0 0;
  padding: 10px;
  border: 4px solid #333;
  min-height: 30px;
  width: 20%;
  border-radius: 20px;
  color: ${props => (props.gameOver ? 'red' : 'white')};
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  
  @media (max-device-width: 1224px) {
    margin: 1%;
  }
`;

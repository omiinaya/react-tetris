import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.width}, 1fr);
  border: 2px solid #333;
  height: 80vh;
  width: 30vw;
  margin: 0 auto;
  background: #111;
`;

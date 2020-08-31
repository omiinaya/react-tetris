import styled from 'styled-components';

export const StyledCell = styled.div`
  width: auto;
  background: rgba(${props => props.color}, 0.8);
  -webkit-box-shadow:inset 0px 0px 0px 0.5px rgba(105, 105, 105, 0.5);
  -moz-box-shadow:inset 0px 0px 0px 0.5px rgba(105, 105, 105, 0.5);
  box-shadow:inset 0px 0px 0px 0.5x rgba(105, 105, 105, 0.5);
`;

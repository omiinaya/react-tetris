import styled from 'styled-components';

export const StyledCell = styled.div`
  width: auto;
  background: rgba(${props => props.color}, 0.8);
  -webkit-box-shadow:inset 0px 0px 0px 0.5px 	#696969;
  -moz-box-shadow:inset 0px 0px 0px 0.5px #696969;
  box-shadow:inset 0px 0px 0px 0.5x #696969;
`;

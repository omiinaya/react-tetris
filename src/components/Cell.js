import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
    //currently hard-coding L for testing
    <StyledCell type={type} color={TETROMINOS[type].color} />
)

export default Cell;
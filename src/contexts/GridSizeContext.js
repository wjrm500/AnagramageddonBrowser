import { createContext } from 'react';

const INIT_GRID_SIZE = 5
const GridSizeContext = createContext(null)
const SetGridSizeContext = createContext(null)

export {INIT_GRID_SIZE, GridSizeContext, SetGridSizeContext}
export const SET_THEME = 'SET_THEME';

const initialState = false;

export const themeReducer = (state = initialState, action) => {
  if (action.type === SET_THEME) return action.payload;
  
  return state;
};
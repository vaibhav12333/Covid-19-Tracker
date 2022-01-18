import {
    DARK_MODE_ON,
    DARK_MODE_OFF
  } from "../Constants";
  
  export const themeReducer = (state = false, action) => {
    switch (action.type) {
      case DARK_MODE_ON: 
        return true;
      case DARK_MODE_OFF:
        return false; 
      default:
        return state;
    }
  };
  
import {
    DARK_MODE_ON,
    DARK_MODE_OFF
} from "../Constants";
  

export const darkModeOn = () => async (dispatch) => { 
  dispatch({ type: DARK_MODE_ON });
};
export const darkModeOff = () => async (dispatch) => { 
  dispatch({ type: DARK_MODE_OFF });
};
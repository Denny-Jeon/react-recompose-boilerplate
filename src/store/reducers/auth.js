import { createAction, handleActions } from "redux-actions";
import { Map } from "immutable";

const INIT = "auth/INIT";
const SET_ERROR = "auth/SET_ERROR";


export const init = createAction(INIT);
export const setError = createAction(SET_ERROR);

const initialState = Map({
    error: "",
});

export default handleActions(
    {
        [INIT]: state => state.set("error", null),
        [SET_ERROR]: (state, action) => state.set("error", action.payload),
    },
    initialState,
);

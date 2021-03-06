import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2122818Reducer from '../features/SignIn2122818/redux/reducers'
import SignIn2122804Reducer from '../features/SignIn2122804/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2122818: SignIn2122818Reducer,
SignIn2122804: SignIn2122804Reducer,

});
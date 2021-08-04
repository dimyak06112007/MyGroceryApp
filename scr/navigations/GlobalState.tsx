import React, {createContext, useContext, useReducer} from 'react';
export const StateOfUriContext = React.createContext({
  UriPassed: false,
  Uri: "D:/MyAwesomeReactNativeApps/Store/scr/assets/images/anonymous.jpg"
})
// export const StateProvider = ({reducer, initialState, children}:any) =>(
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// );
// export const useStateValue = () => useContext(StateContext);
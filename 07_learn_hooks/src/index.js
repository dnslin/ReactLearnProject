import React from 'react';
import ReactDOM from 'react-dom/client';
import APP from './useSelector/APP';
import {ThemeContext, UserContext} from './useContext/context';
import {Provider} from "react-redux";
import store from "./useSelector/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserContext.Provider value={{name: 'DnsLin', age: 18}}>
        <ThemeContext.Provider value={{color: 'red', fontSize: '18px'}}>
            <Provider store={store}>
                <APP/>
            </Provider>
        </ThemeContext.Provider>
    </UserContext.Provider>
);


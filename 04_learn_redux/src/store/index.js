import {createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose;
//  应用中间件 会自动执行 dispatch 返回函数
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));
export default store
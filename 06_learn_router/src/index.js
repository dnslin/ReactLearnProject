import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            {/* 懒加载配置 */}
            <Suspense fallback={<h2>loading.....</h2>}>
                <App/>
            </Suspense>
        </HashRouter>
    </React.StrictMode>
);


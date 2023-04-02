/**
 * @name: index.js
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/22
 */
import React from 'react';
import App from './ComponentCss/APP';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
// 开启 严格模式
// root.render(<React.StrictMode><App/></React.StrictMode>);
root.render(<App/>);

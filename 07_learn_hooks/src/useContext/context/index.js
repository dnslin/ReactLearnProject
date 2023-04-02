/**
 * @name: index.js
 * @projectName: ReactProject
 * @description:
 * @dirPath: 07_learn_hooks/src/useContext/context
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/4/1
 */

import {createContext} from "react";

const ThemeContext = createContext();
const UserContext = createContext();

export  {ThemeContext, UserContext};
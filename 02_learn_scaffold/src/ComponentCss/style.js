/**
 * @name: style.js
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/ComponentCss
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/27
 */

import styled from "styled-components";

//  `` ES6标签模版字符串

// 用模版字符串进行传参

// 用attrs 给默认值
export const HeaderWrapper = styled.div.attrs({
    TColor: (props => props.color) || 'blue'
})`
  .title{
    color: ${props => props.TColor};
  }
  .footer{
    color: blue;
    font-size: ${props => props.size}px;
    &:hover{
      background-color: #f56a07;
    }
  }
`
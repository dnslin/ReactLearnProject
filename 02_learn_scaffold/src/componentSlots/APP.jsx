/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/componentSlots
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/24
 */
import React, {Component} from 'react';
// import NavBar from "./NavBar";
import NavBars from "./nav-bars";
export class APP extends Component {
    render() {
        return (
            <div>
              {/*  不方便的地方就是得记住组件的索引 */}
              {/* 传入 子元素 在 this.prop里 */}
              {/*<NavBar>*/}
              {/*    <button>按钮</button>*/}
              {/*    <h2>我是一些文字</h2>*/}
              {/*    <i>斜体文字</i>*/}
              {/*</NavBar>*/}
              {/* 把元素直接当参数传递  */}
               <NavBars leftSlot={<button>按钮</button>}
                        centerSlot={<h2>文字</h2>}
                        rightSlot={<i>斜体</i>}/>



            </div>
        );
    }
}

export default APP;
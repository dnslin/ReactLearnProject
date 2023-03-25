/**
 * @name: HelloWorld.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/jsx
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/22
 */
import React from 'react';
export class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'HelloWorld'
        }
    }

    render() {
        const {name} = this.state;
        return (
            <div>
                <p>My name is {name}</p>
            </div>
        )
    }
    // 组件挂载之前执行
    componentDidMount() {
        console.log('🌿️️ 我是HelloWorld组件，我挂载了')
    }
    // 组件更新之前执行
    componentDidUpdate() {
        console.log('🌿️️ 我是HelloWorld组件，我更新了')
    }
    // 组件卸载之前执行
    componentWillUnmount() {
        console.log('🌿️️ 我是HelloWorld组件，我卸载了')
    }

    // 可以阻止组件更新 根据返回值true/false
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    // 组件更新之前执行，返回值会作为componentDidUpdate的第三个参数
    // 一般用于获取dom节点 例如：滚动条位置
    getSnapshotBeforeUpdate(prevProps, prevState) {

    }

}
export default HelloWorld;


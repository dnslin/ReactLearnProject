/**
 * @name: Home.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/ComponentsEventBus
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/25
 */
import React, {Component} from 'react';
import HomeBanner from "./HomeBanner";
import hyEventBus from "./utils/events-bus";
export class Home extends Component {

    constructor(props) {
        super(props);
        this.state ={
            info: {}
        }
    }


    componentDidMount() {
        // 监听事件 第三个参数是this 也可以去直接绑定 this 或者 传入方法使用 匿名 箭头函数 总共三种方法
        hyEventBus.on('upClick',this.eventsFunc,this)
    }

    eventsFunc(info){
        this.setState({info})
    }
    componentWillUnmount() {
        //组件销毁后 不要继续监听了 优化性能
        hyEventBus.off('upClick',this.eventsFunc)
    }

    render() {
        const { info } = this.state
        return (
            <div>
                <h2> Home 组件</h2>
                <HomeBanner/>
                <h3>{`名字${info.name},年龄${info.age}`}</h3>
            </div>
        );
    }
}

export default Home;
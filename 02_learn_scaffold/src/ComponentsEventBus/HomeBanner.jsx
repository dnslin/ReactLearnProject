/**
 * @name: HomeBanner.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/ComponentsEventBus
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/25
 */
import React, {Component} from 'react';
import hyEventBus from "./utils/events-bus";
export class HomeBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info:{
                name: 'maker',
                age: 18
            }
        }
    }

    upClick() {
        hyEventBus.emit("upClick",this.state.info)
        console.log("hyEventBus---->upClick")
    }

    downClick() {
        console.log("hyEventBus---->downClick")
    }

    render() {
        return (
            <div>
                <h2>HomeBanner</h2>
                <button onClick={() => this.upClick()}>上一个</button>
                <button onClick={() => this.downClick()}>下一个</button>
            </div>
        );
    }
}

export default HomeBanner;
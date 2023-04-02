/**
 * @name: events-bus.js
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/ComponentsEventBus/utils
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/25
 */
//  事件总线的库 就是 在一个地方定义了 在任何地方都能进行监听
import {HYEventBus} from "hy-event-store";

const hyEventBus = new HYEventBus();

export default hyEventBus;
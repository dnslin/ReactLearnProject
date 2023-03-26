/**
 * @name: hosFunc.js
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/HighOrderComponents/hoc
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/26
 */

import React, { PureComponent } from 'react'

function enhancedUserInfo(WrappedComponent) {
    return class extends PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                userInfo: {
                    name: 'DnsLin',
                    age: 18,
                }
            }
        }
        //  props 传递给子组件
        render() {
            return <WrappedComponent {...this.props} {...this.state.userInfo} />
        }
    }
}

export default enhancedUserInfo
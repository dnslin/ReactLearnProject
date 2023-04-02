/**
 * @name: HomeRanking.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 06_learn_router/src/pages
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/31
 */
import React, {PureComponent} from 'react';
import witchRouter from "../hoc/witchRouter";

export class HomeRanking extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            rankingList: [{
                id: 1,
                name: '榜单1'
            },{
                id: 2,
                name: '榜单2'
            },{
                id: 3,
                name: '榜单3'
            }
            ]
        };
    }
    navToDetail(id){
        const { router } = this.props
        router.navigate("/detail/"+id)
    }
    render() {
        const {rankingList} = this.state
        return (
            <div>
                <h2>榜单数据</h2>
                <ul>
                    {rankingList.map(item=>{
                        return <li key={item.id} onClick={event => this.navToDetail(item.id)}>{item.name}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default witchRouter(HomeRanking);
/**
 * @name: Profile.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 05_learn_rtk/src/pages
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/30
 */
import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {decrement} from "../store/features/counter";
import {fetchBannerList} from "../store/features/home";

export class Profile extends PureComponent {

    componentDidMount() {
        const { fetchHomeResult } = this.props
        fetchHomeResult()
    }

    subClick(num){
        const { incrementNum } = this.props
        incrementNum(num)
    }

    render() {
        const { value,bannerList,recommendList} = this.props
        return (
            <div>
                <h2>Profile: counter: {value}</h2>
                <button onClick={event => this.subClick(5)}>-5</button>
                <div className="banner">
                    <h2>轮播图</h2>
                    <ul> {
                        bannerList.map((item) => {
                            return <li key={item.acm}>{item.title}</li>
                        })
                    } </ul>
                </div>
                <div className="recommend">
                    <h2>推荐</h2>
                    <ul> {
                        recommendList.map((item) => {
                            return <li key={item.acm}>{item.title}</li>
                        })
                    } </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    value: state.counter.value,
    bannerList: state.home.bannerList,
    recommendList: state.home.recommendList
})

const mapDispatchToProps = (dispatch) => ({
    incrementNum: (num) => dispatch(decrement(num)),
    fetchHomeResult: () => dispatch(fetchBannerList()),
})

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
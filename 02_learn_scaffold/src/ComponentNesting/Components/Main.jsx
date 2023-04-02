/**
 * @name: Main.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/ComponentNesting/Components
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/23
 */
import axios from "axios";
import React, {Component} from 'react';
import ListOfGoods from './ListOfGoods';
import MainBanner from "./MainBanner";
export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 一些商品信息的数组
            goods: [],
            productList: []
        }
    }

    render() {
        const {goods,productList} = this.state;
        return (
            <div>
                Main
                <MainBanner title='轮播图' productList={productList}/>
                <ListOfGoods title='商品列表' goods={goods}/>
            </div>
        );
    }

    componentDidMount() {
        axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
            const goods = res.data.data.banner.list
            const productList = res.data.data.recommend.list
            this.setState({
                goods,
                productList
            })
            console.log(goods,productList)
        })

    }

}

export default Main;
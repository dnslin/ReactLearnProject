/**
 * @name: APP.jsx
 * @projectName: ReactProject
 * @description:
 * @dirPath: 02_learn_scaffold/src/ImmutableData
 * @author: DnsLin
 * @organizationName: dnslin.com
 * @time: 2023/3/25
 */
import React, {PureComponent} from 'react';

export class APP extends PureComponent {
    // 在 构造器里的数据 最好浅拷贝完 以后再去修改
    constructor(props) {
        super(props);
        this.state = {
            bookList: [
                {
                    bookName: '三国演义',
                    price: 20,
                    count: 1
                },{
                    bookName: '水浒传',
                    price: 40,
                    count: 4
                },{
                    bookName: '红楼梦',
                    price: 30,
                    count: 2
                },{
                    bookName: '西游记',
                    price: 70,
                    count: 3
                }
            ]
        }
    }
    addCount(index){
        // 1. 不能直接修改 state 里的数据
        // 在pureComponent 里面 会对比数据是否相同 如果相同就不会重新渲染
        const { bookList } = this.state;
        const newBookList = [...bookList];
        newBookList[index].count++;
        this.setState({
            bookList: newBookList
        })
    }
    addNewBooks(){
        // 1. 不能直接修改 state 里的数据
        // 在pureComponent 里面 会对比数据是否相同 如果相同就不会重新渲染
        const { bookList } = this.state;
        const newBookList = [...bookList];
        newBookList.push({
            bookName: '少妇白洁',
            price: 70,
            count: 1
        });
        this.setState({
            bookList: newBookList
        })
    }

    render() {
        const {bookList} = this.state;
        return (
            <div>
                <ul>{
                    bookList.map((item, index) => {
                        return (
                            <li key={index}>
                                <span>书名：{item.bookName} |</span>
                                <span>价格：{item.price} |</span>
                                <span>数量：{item.count} |</span>
                                <button onClick={e=>this.addCount(index)}> +1 </button>
                            </li>
                        )
                    })
                }</ul>
                <button onClick={event => this.addNewBooks()}>添加新书</button>
            </div>
        );
    }
}

export default APP;
/*
 * @Author: SilvesterChiao
 * @Date: 2020-04-06 13:32:05
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-04-06 16:40:23
 */
import React from 'react';

// 列表
// let numbers = [1, 2, 3, 4]
let students = [
    {
        id: 1,
        name: 'Lilei'
    },
    {
        id: 2,
        name: 'Tom'
    },
    {
        id: 3,
        name: 'Lili'
    },
    {
        id: 4,
        name: 'Lucy'
    },
    {
        id: 5,
        name: 'Hanmeimei'
    }
]
// let listItems = numbers.map(item => <li key={item}>{item}</li>)

// class StudentList extends React.Component {
//     render(){
//         return (
//             <div>
//                 <ul>
//                     {/* {listItems} */}
//                     {students.map(item => {
//                         return item.name.includes(this.props.filterValue) ? <li key={item.id}>{item.name}</li> : ''
//                         // return <li key={item.id}>{item.name}</li>
//                     })}
//                 </ul>
//             </div>
//         )
//     }
// }

class SearchStudentView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({
            item: e.target.value
        })
    }
    render() {
        return (
            <div className="component-wrapper">
                <input value={this.state.item} onChange={this.handleChange} />
                {/* <StudentList filterValue={this.state.item} /> */}
                <ul>
                    {students.map(item => {
                        return item.name.includes(this.state.item) ? <li key={item.id}>{item.name}</li> : ''
                    })}
                </ul>
            </div>
        )
    }
}

export default SearchStudentView;

import React,{Component} from 'react'
import {Pagination} from 'antd';
import 'antd/dist/antd.css';
class Paginations extends Component{
    render(){
        return(
            <div className="paginations">
                <span>共计1条</span>
                <Pagination simple defaultCurrent={1} total={1} />
            </div>
        )
    }
}

export default Paginations;
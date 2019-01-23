import React,{Component} from 'react'
// import { Icon } from 'antd';
// import 'antd/dist/antd.css';
class StartUseStatus extends Component{
    render(){
        return(
            <div>
                <i className="fa fa-circle" style={{color:'green', fontWeight:900}}> 启用</i>
            </div>
        )
    }
}

export default StartUseStatus;
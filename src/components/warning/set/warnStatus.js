import React,{Component} from 'react'
import { Icon } from 'antd';
import 'antd/dist/antd.css';
class WarnStatus extends Component{
    render(){
        return(
            <div>
                <Icon type="caret-right" /> 内存告警
            </div>
        )
    }
}

export default WarnStatus;
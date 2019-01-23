import React,{Component} from 'react'
import { Icon } from 'antd';
import 'antd/dist/antd.css';
class CpuWarn extends Component{
    render(){
        return(
            <div>
                <Icon type="caret-right" /> CPU告警
            </div>
        )
    }
}

export default CpuWarn;
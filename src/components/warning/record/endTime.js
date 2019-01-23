import React,{Component} from 'react'
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
class EndTime extends Component{
    render() {
        return (
            <div>
                <DatePicker 
                onChange={this.onChange.bind(this)} 
                placeholder="选择结束时间"
                />
            </div>
        )
    }
    onChange=(date, dateString)=> {
        console.log(date, dateString);
      }
}

export default EndTime;
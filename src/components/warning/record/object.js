import React,{Component} from 'react'
import { Select } from 'antd';
import 'antd/dist/antd.css'
const Option = Select.Option;
class Objects extends Component{
    render() {
        return (
            <div>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="选择告警对象"
                    optionFilterProp="children"
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Option value="max">全部</Option>
                    <Option value="min">k8s-master-1</Option>
                </Select>
            </div>
        )
    }
    handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    handleBlur = () => {
        console.log('blur');
    }

    handleFocus = () => {
        console.log('focus');
    }
}

export default Objects;
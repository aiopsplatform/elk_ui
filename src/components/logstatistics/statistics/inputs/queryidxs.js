import React, { Component } from 'react'
import { TreeSelect } from 'antd';
import 'antd/dist/antd.css'
const TreeNode = TreeSelect.TreeNode;

class QueryIdxs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }
    render() {
        return (
            <div className="statistics_input">
                <span className="span_statis">查询索引 : </span>
                <TreeSelect
                    showSearch
                    style={{ width: 300 }}
                    value={this.state.value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="请选择查询索引"
                    allowClear
                    treeDefaultExpandAll
                    onChange={this.onChange}
                >
                    <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                    </TreeNode>
                    <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                    </TreeNode>
                </TreeSelect>
            </div>
        )
    }
    onChange = (value) => {
        console.log(value);
        this.setState({ value });
    }
}

export default QueryIdxs;
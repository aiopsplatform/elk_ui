import React, { Component } from 'react'
import { TreeSelect } from 'antd';
import 'antd/dist/antd.css';
const TreeNode = TreeSelect.TreeNode;

class Queryidx extends Component {
    constructor(props) {
        super(props)
        this.state = {
            queryidxValue: ""
        }
    }

    render() {
        return (
            <div className="select_box">
                <span className="spanall">索引 ：</span>
                <TreeSelect
                    showSearch
                    style={{ width: 300 }}
                    value={this.state.queryidxValue}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="请选择类型"
                    allowClear
                    treeDefaultExpandAll
                    dropdownClassName="xxss"
                    onChange={this.onChangeType.bind(this)}
                >
                    <TreeNode value="parent 4" title="parent 1" key="0-4">

                    </TreeNode>

                </TreeSelect>
            </div>
        )
    }
    onChangeType = (queryidxValue) => {
        console.log(queryidxValue);
        this.setState({ queryidxValue });
    }
}

export default Queryidx;
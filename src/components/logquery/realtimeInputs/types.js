import React, { Component } from 'react'
import { TreeSelect } from 'antd';
import 'antd/dist/antd.css';
const TreeNode = TreeSelect.TreeNode;

class Types extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typeValue: ""
        }
    }

    render() {
        return (
            <div className="select_box">
                <span className="spanall">类型 ：</span>
                <TreeSelect
                    showSearch
                    style={{ width: 300 }}
                    value={this.state.typeValue}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="请选择类型"
                    allowClear
                    treeDefaultExpandAll
                    dropdownClassName="xxss"
                    onChange={this.onChangeType.bind(this)}
                >
                    <TreeNode value="parent 3" title="parent 1" key="0-3">

                    </TreeNode>

                </TreeSelect>
            </div>
        )
    }
    onChangeType = (typeValue) => {
        console.log(typeValue);
        this.setState({ typeValue });
    }
}

export default Types;
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
        let { mallNavList } = this.props;
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
                    {
                        mallNavList.length > 0 ? mallNavList[1].basic.actors.length <= 0 ? <TreeNode value='正在加载' title='正在加载' key='00000'>正在加载</TreeNode> : mallNavList[1].basic.actors.map((item, index) => {
                            return item.name !== "" ? <TreeNode value={item.name} title={item.name} key={index} /> : ""
                        }) : ""
                    }

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
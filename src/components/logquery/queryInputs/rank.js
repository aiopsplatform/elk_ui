import React, { Component } from 'react'
import { TreeSelect } from 'antd';
import 'antd/dist/antd.css';
const TreeNode = TreeSelect.TreeNode;
class Rank extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rankValue: ""
        }
    }
    render() {
        let { mallNavList } = this.props;
        return (
            <div className="select_box">
                <span className="spanall">级别 ：</span>
                <TreeSelect
                    showSearch
                    style={{ width: 300 }}
                    value={this.state.rankValue}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="请选择级别"
                    allowClear
                    treeDefaultExpandAll
                    dropdownClassName="xxss"
                    onChange={this.onChangeRank.bind(this)}
                >
                    {
                        mallNavList.length > 0 ? mallNavList[1].basic.actors.map((item, index) => {
                            return <TreeNode value={item.actorId} title={item.actorId} key={index} />
                        }) : ""
                    }
                </TreeSelect>
            </div>
        )
    }
    onChangeRank = (rankValue) => {
        console.log(rankValue);
        this.setState({ rankValue });
    }
}

export default Rank;
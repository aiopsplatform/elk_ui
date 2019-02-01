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
        let {mallDemoList} = this.props;
        console.log(mallDemoList)
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
                    {
                        mallDemoList.length > 0? mallDemoList.map((item,i)=>{
                          return  <TreeNode value={item.value} title={item.title} key={i} />
                        }) : ''
                    }

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
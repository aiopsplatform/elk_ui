import React from 'react'
// import Utils from './../../utils/utils'
import { Table } from 'antd'

export default class PTable extends React.Component {
    TableInit = () => {
        let row_selection = this.props.rowSelection;
        // let selectedRowKeys = this.props.selectedRowKeys;
        // const rowSelection = {
        //     type: "checkbox",
        //     selectedRowKeys,
        //     onChange: (selectedRowKeys, selectedItem , selectedIds) => {
        //         this.setState({
        //             selectedRowKeys,
        //             selectedItem,
        //             selectedIds
        //         })
        //     }
        // }
        return <Table
            rowSelection={row_selection}
        />
    }
    render() {
        return (<div>
            {this.TableInit()}
        </div>)
    }
}
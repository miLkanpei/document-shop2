import React from 'react';
import {CCol, CCard, CCardHeader, CCardBody, CDataTable, CBadge} from '@coreui/react'
import Checkbox from '@material-ui/core/Checkbox';

import Basic_button from '../button/Basic_button'

const getBadge = status => {
    switch (status) {
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
  }

const Table = (props) => {

    //TODO: fieldsをpropsで英語で受け取って日本語に定義し直すメソッドを作る
    //TODO: チェックボックスをテーブルの先頭に追加する
    //TODO: checkboxコンポーネント作る

    return(
        <CCol xs="12" lg="12">
            <CCard>
                <CCardHeader>
                    受注詳細
                </CCardHeader>
                <CCardBody>
                    <CDataTable
                        items={props.items}
                        fields={props.fields}
                        striped
                        itemsPerPage={50}
                        pagination
                        scopedSlots = {{
                            'checkbox':
                                ()=><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />,
                            'status':
                                (item)=>(
                                    <td>
                                        <CBadge color={getBadge(item.status)}>
                                        {item.status}
                                        </CBadge>
                                    </td>
                                ),
                            'show_details':
                                (item)=>{
                                    return (
                                        <td className="py-2">
                                            <Basic_button
                                            color="primary"
                                            variant="outline"
                                            shape="square"
                                            size="sm"
                                            text="more"
                                            >
                                            </Basic_button>
                                        </td>
                                    )
                                }
                        }}
                    />
                </CCardBody>
            </CCard>
        </CCol>
    );

}

export default Table;

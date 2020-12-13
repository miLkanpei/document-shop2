import React from 'react'
import {CCol, CCard, CCardHeader, CCardBody, CDataTable, CBadge} from '@coreui/react'
import ControlPointIcon from '@material-ui/icons/ControlPoint';

import usersData from '../../../testdata/MemoTable';
import Basic_button from '../button/Basic_button';

const fields = [
    '内容','受付事項','受付者','Status',
    {
        key: 'plus_button',
        label: '',
        _style: { width: '1%' },
        sorter: false,
        filter: false
    }
]

const getBadge = status => {
    switch (status) {
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
}

const Memo_table = (props) => {
    return(
        <CCol xs="12" lg="12">
            <CCard>
                <CCardHeader>
                    <p>メモ</p>
                    <Basic_button
                        text="定期ユーザー"
                        color="warning"
                    />
                    <Basic_button
                        text="追加"
                        color="info"
                    />
                </CCardHeader>
                <CCardBody>
                    <CDataTable
                        items={usersData}
                        fields={fields}
                        striped
                        itemsPerPage={50}
                        pagination
                        addTableClasses="scroll"
                        scopedSlots = {{
                            'Status':
                                (item)=>(
                                    <td>
                                        <CBadge color={getBadge(item.status)}>
                                        {item.status}
                                        </CBadge>
                                    </td>
                                ),
                            'plus_button':
                                (item)=>{
                                    return (
                                        <ControlPointIcon color='primary'/>
                                    )
                                }
                        }}
                    />
                </CCardBody>
            </CCard>
        </CCol>
    )
}

export default Memo_table;
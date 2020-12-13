import React from "react"
import {CCol, CCard, CCardHeader, CCardBody, CDataTable, CBadge} from '@coreui/react'

import usersData from '../../../../testdata/HistoryTable'

const fields = [
    '実行画面','実行者','実行者IP','処理データ', 'カラム', '変更前', '変更後', '処理日付', '金額'
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

const History_modal = () => {
    return(
        <CCol xs="12" lg="12">
            <CCard>
                <CCardHeader>
                    メモ
                </CCardHeader>
                <CCardBody>
                    <CDataTable
                        items={usersData}
                        fields={fields}
                        striped
                        itemsPerPage={50}
                        pagination
                        scopedSlots = {{
                            '実行者IP':
                                (item)=>(
                                    <td>
                                        <CBadge color={getBadge(item.実行者IP)}>
                                            {item.実行者IP}
                                        </CBadge>
                                    </td>
                                ),
                            '処理データ':
                                (item)=>(
                                    <td>
                                        <CBadge color={getBadge(item.処理データ)}>
                                            {item.処理データ}
                                        </CBadge>
                                    </td>
                                ),
                            '変更前':
                                (item)=>(
                                    <td>
                                        <CBadge color={getBadge(item.変更前)}>
                                            {item.変更前}
                                        </CBadge>
                                    </td>
                                )
                        }}
                    />
                </CCardBody>
            </CCard>
        </CCol>
    )
}

export default History_modal
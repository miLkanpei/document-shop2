import React from 'react';
import {CCol, CCard, CCardHeader, CCardBody, CDataTable, CBadge} from '@coreui/react';

import usersData from '../../../testdata/TabInnerTable';

const fields = [
    '実行画面', '実行者', 'カラム', '変更前', '変更後', '処理日付'
]

const Tab_inner_table = () => {
    return(
        <CCol xs="12" lg="12">
            <CCard>
                <CCardBody>
                    <CDataTable
                        items={usersData}
                        fields={fields}
                        striped
                        itemsPerPage={50}
                        pagination
                        addTableClasses="scroll"
                    />
                </CCardBody>
            </CCard>
        </CCol>
    )
}

export default Tab_inner_table;
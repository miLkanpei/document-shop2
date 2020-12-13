import React from 'react'
import {CCol, CCard, CCardHeader, CCardBody, CDataTable, CBadge} from '@coreui/react'

import usersData from '../../../testdata/OrderDetailProductTable'

const fields = [
    '商品名','商品コード','個数'
]

const Order_deatil_product_table = (props) => {
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
                    />
                </CCardBody>
            </CCard>
        </CCol>
    )
}

export default Order_deatil_product_table;
import React from 'react';
import {CCol, CCard, CCardHeader, CCardBody, CDataTable, CBadge} from '@coreui/react'
import ControlPointIcon from '@material-ui/icons/ControlPoint';

import Basic_input from '../form/input/Basic_input';
import usersData from '../../../testdata/ProductChangeTable';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const fields = [
    '商品名','商品コード', '個数', '値段', '小計',
    {
        key: 'delete_button',
        label: '',
        _style: { width: '1%' },
        sorter: false,
        filter: false
    }
]

const Product_change_table = () => {

    return (
        <CCol xs="12" lg="12">
            <CCard>
                <CCardHeader>
                    <p>商品内容変更</p>
                </CCardHeader>
                <CCardBody>
                    <CDataTable
                        addTableClasses="product_change_table"
                        items={usersData}
                        fields={fields}
                        striped
                        itemsPerPage={50}
                        pagination
                        scopedSlots = {{
                            'delete_button':
                                (item, index)=>{
                                    const next_index = usersData.length - 1;
                                    return (
                                        <>
                                            {index === next_index
                                                ? <ControlPointIcon color='primary'/>
                                                : <HighlightOffIcon color='primary'/>
                                            }
                                        </>
                                    )
                                }
                        }}
                    />
                </CCardBody>
            </CCard>
        </CCol>
    )
}

export default Product_change_table;

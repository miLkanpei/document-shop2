import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

import Basic_button from '../button/Basic_button'
import List_header_buttons from '../button/List_header_buttons'
import {CCol, CCard, CCardBody, CDataTable, CBadge} from '@coreui/react'
import Checkbox from '@material-ui/core/Checkbox';
import {fetchCustomersData} from '../../../reducks/customers/operations'
import {getCustomer} from '../../../reducks/customers/selectors'

const getBadge = status => {
    switch (status) {
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
}

const Customer_list_table = (props) => {

    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const customers = getCustomer(selector);
    useEffect(() => {
        dispatch(fetchCustomersData());
    }, []);

    return(
        //render時に状態stateで判定する必要あり
        <div className="customer-list">
            <CCol xs="12" lg="12">
                <CCard>
                    <div className="customer-list-container">
                        <List_header_buttons
                            title="顧客一覧"
                        />
                        <div className="customer-list-item">
                            <CCardBody>
                                <CDataTable
                                    items={customers}
                                    fields={props.fields}
                                    striped
                                    itemsPerPage={100}
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
                                                        onClick={() => dispatch(push('/customer_detail'))}
                                                    >
                                                    </Basic_button>
                                                </td>
                                            )
                                        }
                                    }}
                                />
                            </CCardBody>
                        </div>
                    </div>
                </CCard>
            </CCol>
        </div>
    );

}

export default Customer_list_table;

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Pusher from 'react-pusher';
import {CCol, CCard, CCardBody, CDataTable, CBadge, CButton, CCollapse} from '@coreui/react'
import Checkbox from '@material-ui/core/Checkbox';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Echo from 'laravel-echo';

import List_header_buttons from '../button/List_header_buttons';
import userData from '../../../testdata/OrderListTable';
import ModalOuter from '../modal/ModalOuter';
import Order_deatil_product_table from '../table/Order_deatil_product_table.jsx'
import Order_deatil_customer_table from '../table/Order_deatil_customer_table';
import {pusherTest} from '../../../reducks/customers/operations'

const getBadge = status => {
    switch (status) {
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
}

const fields = [
    {
        key: 'checkbox',
        label: '',
        _style: { width: '1%' },
        sorter: false,
        filter: false
    },
    '名前','受注番号',　'受注種別', '対応状況', '支払い方法', '発送日', 'お届け日', '発送業者',
    {
        key: 'show_details',
        label: '',
        _style: { width: '1%' },
        sorter: false,
        filter: false
    }
]

const Order_table = () => {

    const [details, setDetails] = useState([]);
    const [isScroll, setIsScroll] = useState('');
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const [messages, setMessages] = useState([])

    const toggleDetails = (index) => {
        const position = details.indexOf(index)
        let newDetails = details.slice()
        if (position !== -1) {
          newDetails.splice(position, 1)
        } else {
          newDetails = [...details, index]
        }
        setDetails(newDetails)
      }

    const is_scroll = () => {
        const pathname = selector.router.location.pathname.slice(1);
        if (pathname === "customer_detail") {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    }

    useEffect(() => {
        is_scroll();
    })

    // useEffect(() => {
    //     window.Echo.channel('task-added-channel')
    //     .listen('TaskAdded',function(data){
    //        console.log('received a message');
    //        console.log(data);
    //      });
    // })

    return(
        <div className="customer-list">
            <CCol xs="12" lg="12">
                <CCard>
                    <div className="customer-list-container">
                        <List_header_buttons
                            title="受注一覧"
                        />
                        <div className="customer-list-item">
                            <CCardBody>
                                <CDataTable
                                    items={userData}
                                    fields={fields}
                                    striped
                                    itemsPerPage={50}
                                    pagination
                                    // addTableClasses={isScroll ? "scroll" : ''}
                                    scopedSlots = {{
                                        'checkbox':
                                            ()=><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />,
                                        '受注種別':
                                            (item)=>(
                                                <td>
                                                    <CBadge color={getBadge(item.受注種別)}>
                                                    {item.受注種別}
                                                    </CBadge>
                                                </td>
                                            ),
                                        '対応状況':
                                            (item)=>(
                                                <td>
                                                    <CBadge color={getBadge(item.対応状況)}>
                                                    {item.対応状況}
                                                    </CBadge>
                                                </td>
                                            ),
                                        '決済状況':
                                            (item)=>(
                                                <td>
                                                    <CBadge color={getBadge(item.決済状況)}>
                                                    {item.決済状況}
                                                    </CBadge>
                                                </td>
                                            ),
                                        'show_details':
                                            (item, index)=>{
                                                return (
                                                <td className="py-2">
                                                    {details.includes(index)
                                                        ? <RemoveCircleOutlineIcon
                                                            onClick={() => {toggleDetails(index)}}
                                                            color='primary'
                                                          />
                                                        : <ControlPointIcon
                                                            color='primary'
                                                            onClick={() => {toggleDetails(index)}}
                                                          />
                                                    }
                                                </td>
                                                )
                                            },
                                        'details':
                                            (item, index)=>{
                                            return (
                                            <CCollapse show={details.includes(index)}>
                                                <CCardBody>
                                                    <div className="u_display-flex">
                                                        <div className="width-550">
                                                            <Order_deatil_product_table/>
                                                            <div className="order_table-btn-container">
                                                              <ModalOuter
                                                                  className="order_table-btn"
                                                                  modal_title = "商品内容変更"
                                                                  type = "History_modal"
                                                              />
                                                              <ModalOuter
                                                                  className="order_table-btn"
                                                                  modal_title = "定期便履歴"
                                                                  type = "History_modal"
                                                              />
                                                            </div>
                                                        </div>
                                                        <div className="width-550">
                                                            <Order_deatil_customer_table/>
                                                            <div className="order_table-btn-container">
                                                              <ModalOuter
                                                                  className="order_table-btn-edit"
                                                                  modal_title = "基本情報編集"
                                                                  type = "Basic_information_editing_modal"
                                                              />
                                                            </div>
                                                            <div className="order_table-payment-change-container">
                                                             <ModalOuter
                                                                  className="order_table-link-btn"
                                                                  modal_title = "決済履歴"
                                                                  type = "History_modal"
                                                                  attribute="link"
                                                                  link_name="決済履歴 ＞"
                                                              />
                                                              <ModalOuter
                                                                  className="order_table-link-btn"
                                                                  modal_title = "変更履歴"
                                                                  type = "History_modal"
                                                                  attribute="link"
                                                                  link_name="変更履歴 ＞"
                                                              />
                                                            </div>
                                                            <div className="order_table-memo-container">
                                                              <ModalOuter
                                                                  className="order_table-link-btn"
                                                                  modal_title = "メモ履歴"
                                                                  type = "History_modal"
                                                                  attribute="link"
                                                                  link_name="メモ履歴 ＞"
                                                              />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CCardBody>
                                            </CCollapse>
                                            )
                                        }
                                    }}
                                />
                            </CCardBody>
                        </div>
                    </div>
                </CCard>
            </CCol>
            {/* <Pusher
                channel="task-added-channel"
                event="TaskAdded"
                onUpdate={() => dispatch(pusherTest())}
            /> */}
        </div>
    );

}

export default Order_table;

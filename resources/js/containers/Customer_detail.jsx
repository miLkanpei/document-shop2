import React from 'react';
import Customer_detail_table from '../components/UIkit/table/Customer_detail_table';
import Order_table from '../components/UIkit/table/Order_table';
import Memo_table from '../components/UIkit/table/Memo_table';
import Tab_table from '../components/UIkit/table/Tab_table';

const Customer_detail = () => {
    return(
        <div className="customer-detail">
            <div className="customer-detail-customer">
                <Customer_detail_table/>
            </div>
            <div className="customer-detail-children">
                <Customer_detail_table/>
            </div>
            <div className="customer-detail-order">
                <Order_table/>
            </div>
            <div className="customer-detail-memo">
                <Memo_table/>
            </div>
            <div className="customer-detail-history">
                <Tab_table />
            </div>
        </div>
    )
}

export default Customer_detail;
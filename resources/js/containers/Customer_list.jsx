import React from 'react'

import usersData from '../testdata/CustomerTable';
import Customer_list_table from '../components/UIkit/table/Customer_list_table';

const CoreUi = (props) => {

    const fields = [
        {
            key: 'checkbox',
            label: '',
            _style: { width: '1%' },
            sorter: false,
            filter: false
        },
        '名前','顧客番号', '電話番号', 'メールアドレス', "購入総数", "回数", "status",
        {
            key: 'show_details',
            label: '',
            _style: { width: '1%' },
            sorter: false,
            filter: false
        }
    ]

    return(
        <div>
            <Customer_list_table
                items = {usersData}
                fields = {fields}
            />
        </div>
    );
}

export default CoreUi
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import axios from "axios";
import * as Api from '../../api/app'

import { fetchCustomerAction } from '../../reducks/sample/customers/actions'
import {getCustomersLists} from '../../reducks/sample/customers/selectors'

const Customer = () => {

    const dispatch = useDispatch();
    const selector = useSelector( (state) => state )
    const customers = getCustomersLists(selector);
    console.log(customers);

    const fetchCustomers = async () => {
        const response = await axios.get('/api/customers');
        const aa = await Api.get('/api/customers', {} , true);
        console.log(aa);
        dispatch(fetchCustomerAction(response.data));
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    const Customer = (props) => {
        return(
            <>
                <div>{props.name}:{props.phone_number}</div>
                <button onClick={() => dispatch(push(`/customer/edit/${props.id}`))}>
                    詳細
                </button>
                <button>
                    削除
                </button>
            </>
        )
    }

    return(
        <>
            <div>
                {customers.length > 0 && (
                    customers.map(customer => (
                        <Customer
                            id = {customer.id}
                            key = {customer.id}
                            name = {customer.name}
                            phone_number = {customer.phone_number}
                        />
                    ))
                )}
            </div>
        </>
    )
}

export default Customer;
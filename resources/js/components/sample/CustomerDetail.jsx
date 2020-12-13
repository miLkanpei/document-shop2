import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";

import {getCustomersLists} from '../../reducks/sample/customers/selectors'

const CustomerDetail = () => {

    const dispatch = useDispatch();
    const [target, setTarget] = useState("");
    const [name, setName] = useState("");
    const selector = useSelector( (state) => state )
    const customers = getCustomersLists(selector);
    let id = window.location.pathname.split('/customer/edit/')[1];

    const deleteCustomer =　async (id) => {
        // return async (dispatch, getState) => {
        //     await axios.delete(`/api/customers/${id}`)
        //         .then(() => {
        //             const prevCustomer = getState().customers.list;
        //             const nextCustomers = prevCustomer.filter(customer => customer['id'] !== id)
        //             console.log(prevCustomer);
        //             console.log(nextCustomers);
        //         })
        //         .catch(console.log("失敗したよ"))
        // }
        const destroy = await axios.delete(`/api/customers/${id}`)
        // dispatch(destroyAction(id));
    }

    useEffect(() => {
        const targetCustomer = customers.filter(item => {
            if(item.id === Number(id)) {
                return true;
            }
        });
        console.log(targetCustomer[0]["name"]);
        setTarget(targetCustomer[0]);
    }, [id])
    console.log(target);
    return(
        <>
            <h2>ユーザー詳細ページ</h2>
            <h3>{target['name']}</h3>
            <button>
                編集
            </button>
            <button onClick={() => deleteCustomer(target['id'])}>
                削除
            </button>
        </>
    )
}

export default CustomerDetail;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

import { signIn } from '../../reducks/sample/users/operatinos';

const Login = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const isSignedIn = selector.testUsers.isSignedIn;

    useEffect( () => {
        console.log(selector);
        if(isSignedIn){
            dispatch(push('/'));
        }
    });

    return (
        <div>
            <h2>ログイン</h2>
            <button onClick={() => dispatch(signIn())}>
                ログイン
            </button>
            <button onClick={() => dispatch(push('/customer_list'))}>
                顧客一覧ページ
            </button>
            <button onClick={() => dispatch(push('/customer_detail'))}>
                顧客詳細ページ
            </button>
            <button onClick={() => dispatch(push('/order_list'))}>
                受注一覧ページ
            </button>
            <button onClick={() => dispatch(push('/customer'))}>
                customer
            </button>
            <button onClick={() => dispatch(push('/order_table'))}>
                order_table
            </button>
            <button onClick={() => dispatch(push('/modal'))}>
                modal
            </button>
            <div className="imagetest"></div>
        </div>
    )
}

export default Login
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

const Sidebar = () => {

    const dispatch = useDispatch();

    return(
        <div className='c-sidebar-container'>
            <div className='body'>
                <div className='item' onClick={() => dispatch(push('/customer_list'))}>
                    顧客
                </div>
                <div className='item' onClick={() => dispatch(push('/order_list'))}>
                    受注
                </div>
                <div className='item'>
                    製品
                </div>
                <div className='item'>
                    商品
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
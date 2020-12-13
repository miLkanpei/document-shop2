import React from 'react';
import Product_change_table from '../../table/Product_change_table'
import Basic_input from '../../form/input/Basic_input'

const Product_change_modal = () => {
    return(
        <>
            <Product_change_table/>
            <div>
                <Basic_input
                    text="割引"
                />
                <Basic_input
                    text="ラッピング代金"
                />
                <Basic_input
                    text="送料"
                />
                <Basic_input
                    text="手数料"
                />
                <Basic_input
                    text="消費税"
                />
                <div>
                    <p>合計</p>
                    <p>10000円</p>
                </div>
            </div>
        </>
    )
}

export default Product_change_modal;
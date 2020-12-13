import React from 'react';

import Search_input from '../form/input/Search_input'
import Date_input from '../form/input/Date_input'
import Basic_button from '../button/Basic_button'
import Dropdown from '../common/Dropdown';
import ModalOuter from '../modal/ModalOuter'

const Search_sidebar = () => {
    const label = true;
    return(
        <div className='c-search-sidebar pd_l14 pd_r14'>
          <div className='pd_t20'>
            <Search_input />
          </div>

          <Dropdown className="width_20"/>
            <p className="pd_t29 c-search-sidebar-font">受注日</p>
            <Date_input
                label = {false}
                xs = {12}
                md = {12}
            />
            <Date_input
                label = {false}
                xs = {12}
                md = {12}
            />
          <p className="c-search-sidebar-font">発送日</p>
            <Date_input
                label = {false}
                xs = {12}
                md = {12}
            />
            <Date_input
                label = {false}
                xs = {12}
                md = {12}
            />
            <p className="c-search-sidebar-font">お届け日</p>
            <Date_input
                label = {false}
                xs = {12}
                md = {12}
            />
            <Date_input
                label = {false}
                xs = {12}
                md = {12}
            />
          <div className='center'>
                <Basic_button
                    className="c-search-sidebar-search-btn"
                    size="md"
                    text="検索"
                />
                <ModalOuter
                    className="c-search-sidebar-filtering-btn"
                    modal_title = "さらに絞り込む"
                    type = "Search_condition_modal"
                />
                <Basic_button
                    className="c-search-sidebar-reset-btn"
                    size="sm"
                    text="リセット"
                />
            </div>
        </div>
    )
}

export default Search_sidebar;

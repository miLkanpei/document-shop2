import React from 'react';
import Basic_button from '../button/Basic_button';
const Search_condition_bar = () => {
  return(
    <div className='search-condition-bar'>
        <div className='seach-word-container'>
            <p className='seach-word'>検索条件</p>
            <p className='result-word'>羽生善治,羽生善治,羽生善治,羽生善治,羽生善治</p>
        </div>
        <Basic_button
            className="search-condition-bar-btn"
            text="検索条件を保存"
        />
    </div>
  )
}

export default Search_condition_bar;

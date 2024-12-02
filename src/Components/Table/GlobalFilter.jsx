import React from 'react'
import styles from './styles.module.css';
import SearchBar from '../../../public/assets/Search.svg';

export const GlobalFilter = ({ filter, setFilter }) => {
    return (
        <div className={styles.tableSearch}>
            <img src={SearchBar} style={{height:16,width:16,margin:0}}/>
            <input className={styles.searchInput} value={filter || ''} placeholder="Search" onChange={e=>setFilter(e.target.value)}/>
        </div>
    )
}

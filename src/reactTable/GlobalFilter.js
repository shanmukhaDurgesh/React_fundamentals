import React, { useMemo } from 'react'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './Columns'
import { useTable,useSortBy } from 'react-table'
import './table.css'
import { FaSistrix } from "react-icons/fa";

export const GlobalFilter = ({filter,setFilter}) => {
    return (
        <div className="col-md-3 search" style={{float:'right'}}>
              <input className="search__text" value={filter || ''} onChange={(e) => setFilter(e.target.value)} 
              type="text" placeholder="Type to search for something" />
              <span className="search__button"><FaSistrix /></span>
        </div>
    )
}

{/* <span>
Search:{' '}
<input value={filter || ''} onChange={(e) => setFilter(e.target.value)}/>
</span> */}
import React, { useMemo } from 'react'
import MOCK_DATA from '../reactTable/MOCK_DATA.json'
import { useTable,useSortBy } from 'react-table'
import { COLUMNS } from '../reactTable/Columns'
import './table.css'
export const KdTable = () => {
    const columns = useMemo(() => COLUMNS,[])
    const data = useMemo(() => MOCK_DATA.slice(0,10),[])
    const tableInstance = useTable({
        columns,data
    },useSortBy)
    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = tableInstance
    return (
        <div className="table-block">
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? '^' : '^') : ''}
                                        </span>
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map((row) => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => {
                                        return (
                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    )
}
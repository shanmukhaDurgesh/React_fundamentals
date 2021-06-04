import React, { useMemo } from 'react'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './Columns'
import { useTable,useSortBy, useGlobalFilter, usePagination, useRowSelect } from 'react-table'
import './table.css'
// import './specTable.scss'
import { GlobalFilter } from './GlobalFilter'
import Checkbox from './Checkbox'
import {format} from 'date-fns'

export const FilterTable = (props) => {
    const columns = useMemo(() => [
        {
            Header:"Id",
            accessor:"id"
        },
        {
            Header:"First Name",
            accessor:"first_name"
        },
        {
            Header:"Last Name",
            accessor:"last_name"
        },
        {
            Header:"Email",
            accessor:"email"
        },
        {
            Header:"Date of Birth",
            accessor:"date_of_birth",
            Cell: ({value}) => { return format(new Date(value), 'MM/dd/yyyy')}
        },
        {
            Header:"Age",
            accessor:"age"
        },
        {
            Header:"Country",
            accessor:"country"
        },
        {
            Header:"Phone",
            accessor:"phone"
        },
        {
            Header:"Action",
            accessor:"action",
            Cell: (props) => {
                const rowIdx = props.row.id;
                return (
                  <div>
                          <select onChange={(e) => changeResult(e.currentTarget.value,rowIdx,props.row)}>
                              {items.map(({ label, value }) => (<option key={value} value={value}>{label}</option>))}
                              </select>
                  </div>
                );
              },
        }
    ],[])
    const data = useMemo(() => MOCK_DATA,[])
    const tableInstance = useTable(
        {
            columns,
            data,
            initialState: {pageIndex : 0}
        },
        useGlobalFilter,
        useSortBy,
        usePagination,
        useRowSelect,
        hooks => {
            hooks.visibleColumns.push(columns => [
              // Let's make a column for selection
              {
                id: 'selection',
                // The header can use the table's getToggleAllRowsSelectedProps method
                // to render a checkbox
                Header: ({ getToggleAllRowsSelectedProps }) => (
                  <div>
                    <Checkbox {...getToggleAllRowsSelectedProps()} />
                  </div>
                ),
                // The cell can use the individual row's getToggleRowSelectedProps method
                // to the render a checkbox
                Cell: ({ row }) => (
                  <div>
                    <Checkbox {...row.getToggleRowSelectedProps()} />
                  </div>
                ),
              },
              ...columns,
            ])
        }
    )
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        selectedFlatRows} = tableInstance
    
    const {globalFilter,pageIndex,pageSize} = state

    console.log(selectedFlatRows);

    var items=[
        {value: undefined, label: 'Select'},
        {value: 'text', label: 'text'},
        {value: 'picklist', label: 'picklist'},
        {value: 'date', label: 'date'},
        {value: 'userlist', label: 'userlist'},
        {value: 'checkbox', label: 'checkbox'}
    ];
    const changeResult = (e,rowIndex,row) => {
        data[rowIndex]['action'] = e
        row.original['action'] = e
        console.log(selectedFlatRows);
        if(selectedFlatRows.length > 0){
            selectedFlatRows.map((e1,row) => {
                if(row.id == e1.id)
                return e['actions'] = e}
                )
        }
    };
    
    return (
        <>
        <div className="col-md-12 row">
            <div className="col-md-3"><h3>Table</h3></div>
            <div className="col-md-9">
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
            </div>
        </div>
        <div className="col-md-12 table-div">
        <table className="Table" {...getTableProps()}>
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
                    page.map((row) => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell,i) => {
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
        <div>
            <span>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>
            </span>
            <span>
                | Go to page: {' '}
                <input type='number' defaultValue={pageIndex + 1} onChange={e => {
                    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(pageNumber)
                }} style={{width: '50px'}}/>
            </span>
            <select value={pageSize} onChange={e => Number(setPageSize(e.target.value))}>
                {
                    [10,25,50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>{pageSize}</option>
                    ))
                }
            </select>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
        </div>
        <pre>
            <code>
                {JSON.stringify(
                    {
                       selectedFlatRows: selectedFlatRows.map((row) => row.original),
                    },null,2
                )}
            </code>
        </pre>
        </>
    )
}
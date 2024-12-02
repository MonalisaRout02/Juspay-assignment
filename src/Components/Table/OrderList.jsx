import React, { useMemo, useEffect, useState ,useContext} from 'react';
import { useTable, useRowSelect, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import { COLUMNS } from './Columns';
import styles from './styles.module.css';
import './table.css';
import { Checkbox } from './Checkbox';
import { Data } from './TableData';
import { GlobalFilter } from './GlobalFilter';
import { ThemeContext} from '../ThemeContext/ThemeContext'; // Import the theme context
import ArrowLineLeft from "../../../public/assets/ArrowLineLeft.svg";
import Add from "../../../public/assets/Add.svg";
import Lines from "../../../public/assets/Lines.svg";
import ArrowsDownUp from "../../../public/assets/ArrowsDownUp.svg";
import ArrowLineRight from "../../../public/assets/ArrowLineRight.svg";

export const OrderList = ({ onSelectedRows }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Data, [Data]);
  const {theme} = useContext(ThemeContext)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    selectedFlatRows,
    toggleAllRowsSelected,
    toggleRowSelected,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} isSelected={row.isSelected} />,
        },
        ...columns,
      ]);
    }
  );

  const { pageIndex } = state;

  useEffect(() => {
    onSelectedRows(selectedFlatRows);
  }, [selectedFlatRows, onSelectedRows]);

  // Define theme-based row styles
  const rowStyles = {
    light: {
      row: styles.lightRow,  // Define a light row style
      selected: styles.lightSelectedRow,  // Define a light selected row style
    },
    dark: {
      row: styles.darkRow,  // Define a dark row style
      selected: styles.darkSelectedRow,  // Define a dark selected row style
    },
  };

  const currentStyles = rowStyles[theme] || rowStyles.light;

  return (
    <div className={styles.table}>
      <h1
        className={`text-semibold ${theme}`}
        style={{
          color: "black",
          fontWeight: "600",
          margin: "25px 15px 10px 15px",
        }}
      ></h1>
      <div className={styles.topContainer}>
        <div className={styles.optionsBar}>
        <button className={styles.tableBtn}>
            <img src={Add} />
          </button>
          <button className={styles.tableBtn}>
            <img src={Lines} />
          </button>
          <button className={styles.tableBtn}>
            <img src={ArrowsDownUp} />
          </button>
        </div>
        <div className={styles.rightContainte}>
          <GlobalFilter filter={state.globalFilter} setFilter={setGlobalFilter} />
        </div>
      </div>

      <div className="BO-table-container p-2">
        <table className={styles.fullTable} {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? '~^ ' : '^') : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className={`${rowStyles[theme].row} ${row.isSelected ? rowStyles[theme].selected : ''}`}
                >
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.bottomContainter}>
        <div className={styles.paginationContainer}>
          <button
            className={styles.previousBtn}
            onClick={previousPage}
            disabled={!canPreviousPage}
          >
            <img style={{ margin: '0px' }} src={ArrowLineLeft} />
          </button>
          {pageOptions.map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => gotoPage(pageNum)}
              className={pageNum === pageIndex ? styles.activePage : styles.pageIndexButton}
            >
              {pageNum + 1}
            </button>
          ))}
          <button
            className={styles.nextBtn}
            onClick={nextPage}
            disabled={!canNextPage}
          >
            <img style={{ margin: '0px' }} src={ArrowLineRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

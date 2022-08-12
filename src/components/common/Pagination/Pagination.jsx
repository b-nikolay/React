import React, {  useState } from 'react';

import classes from '../../Users/Users.module.css';

let Pagination = ({ totalItemsCount, currentPage, pageSize, onPageChanged, portionSize = 10 }) => {
  let pagesCounts = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCounts; i++) {
    pages.push(i)
  }
  let portionCount = Math.ceil(pagesCounts / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let prevBtn = (portionNumber - 1) * portionSize + 1;
  let nextBtn = portionNumber * portionSize;

  return (
    <div className={classes.pagination}>
      {portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }} className={classes.paginationPrev}> Prev </button>
      }


      {pages
        .filter((page) => {
          return page >= prevBtn && page <= nextBtn})
        .map((page) => {
          return (
            <span
              key={page}
              className={currentPage === page ? classes.select : ''}
              onClick={() => {
                onPageChanged(page)
              }}>{page}
            </span>
          )
        })

      }


      {portionCount >= portionNumber &&

        <button onClick={() => { setPortionNumber(portionNumber + 1) }} className={classes.paginationNext}> Next </button>
      }
    </div>
  )
}

export default Pagination;
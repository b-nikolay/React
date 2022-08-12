import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import User from './User';

import classes from './Users.module.css';


const Users = ({ currentPage, totalItemsCount, pageSize, onPageChanged, follow, followingInProgress, unFollow, users, portionSize,...props }) => {



  return (
    <div className={classes.content}>
      <h2 className={classes.title}>Users</h2>
      <Pagination currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalItemsCount} pageSize={pageSize} portionSize={portionSize} />
      {
        users.map(user => <User user={user} followingInProgress={followingInProgress} follow={follow} unFollow={unFollow}  key={user.id} />)
      }
    </div>
  )
}

export default Users;
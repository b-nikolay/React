import { connect } from 'react-redux';
import { follow, setCurrentPage, unFollow, getUsers } from '../../Redux/users-reducer';
import Users from './Users';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalItemsCount, getUsersItem } from '../../Redux/users-selectors';


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }
  render() {
    return (
      <>

        {this.props.isFetching ? <Preloader /> : null}
        <Users
          onPageChanged={this.onPageChanged}
          totalItemsCount={this.props.totalItemsCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          fetching={this.props.isFetching}
          followingInProgress={this.props.followingInProgress}
        />

      </>)
  }
}


const mapStateToProps = (state) => {
  return {
    users: getUsersItem(state),
    pageSize: getPageSize(state),
    totalItemsCount: getTotalItemsCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
    
  }
}



export default compose(connect(mapStateToProps, { 
  follow, 
  unFollow, 
  setCurrentPage, 
  getUsers,
}))(UsersContainer)

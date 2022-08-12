import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateStatus } from '../../Redux/profile-reducer';
import Profile from './Profile';
import {  useLocation, useNavigate, useParams } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {


  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.loginingUserId;
      if (!userId) {
        this.props.router.navigate('/login');
      }
    }

    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);

  }

  render() {
    return (
      <Profile
        {...this.props}
      />
    )
  }


}



let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loginingUserId: state.auth.userId,
    isAuth: state.auth.isAuth,

  }

}


let withRouter = (Component) => {
  const ComponentWithRouterProps = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    )
  }

  return ComponentWithRouterProps

}

export default compose(connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus }), withRouter) (ProfileContainer);


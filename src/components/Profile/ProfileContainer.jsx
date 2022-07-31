import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../Redux/profile-reducer';
import Profile from './Profile';
import { useLocation, useNavigate, useParams} from 'react-router-dom';
import { usersAPI } from '../../API/API';

class ProfileContainer extends React.Component {


  componentDidMount() {
    
    let userId = this.props.router.params.userId;

    if(!userId) {
      userId = 2;
    }

    console.log(usersAPI.getProfile(userId));
    usersAPI.getProfile(userId)

    // axios
    //   .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    //   .then(response => {
    //     this.props.setUserProfile(response.data)
    //   });
  }

  render() {
    return (
      <Profile
        {...this.props}

      />
    )
  }


}


const mapStateToProps = (state) => {

  return {
    profile: state.profilePage.profile,
  }

}

const withRouter = (Component) => {
  const ComponentWithRouterProps = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component 
        {...props}
        router={{location, navigate, params}}
      />
    )
  }

  return ComponentWithRouterProps

}



export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));
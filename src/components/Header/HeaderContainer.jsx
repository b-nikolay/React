
import React from 'react';
import { connect } from 'react-redux';
import { headerAPI } from '../../API/API';
import { setAuthUserData } from '../../Redux/auth-reducer';
import Header from './Header'

class HeaderContainer extends React.Component {

  componentDidMount() {


    headerAPI.getHeader().then(data => {
      if (data.resultCode === 0) {
        let { login, id, email } = data.data
        this.props.setAuthUserData(id, email, login)
      }
    });
  }

  render() {
    return (
      <Header {...this.props} />
    )
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
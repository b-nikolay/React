import React from 'react';

import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {


  state = {
    editMode: false,
    status: this.props.status,
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
        
      })
    }
    console.log(prevProps);
  }

  render() {
    return (
      <div className={classes.status}>
        {!this.state.editMode &&
          <span onDoubleClick={this.activateEditMode} className="description">{this.props.status || 'No status'}</span>
        }

        {this.state.editMode &&
          <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} type="text" placeholder='Your status' />
        }
      </div>
    )
  }



}

export default ProfileStatus;
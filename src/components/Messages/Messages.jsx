import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Messages.module.css';

const UserItem = (props) => {

  let path = '/messages/' + props.id;

  return (
    <div className={classes.user}>
      <NavLink  className={({ isActive }) => isActive ? classes.activeLink : classes.userLink} to={path}>{props.name}</NavLink>
    </div>
  )
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>
};


const Messages = (props) => {

  let userData = [
    { id: 1, name: 'Дмитрий' },
    { id: 2, name: 'Антон' },
    { id: 3, name: 'Валера' },
    { id: 4, name: 'Денис' },
    { id: 5, name: 'Андрей' },
  ];

  let messageData = [
    { id: 1, message: 'Lorem ipsum dolor sit.' },
    { id: 2, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam tenetur culpa ullam labore enim.' },
    { id: 3, message: 'onsectetur adipisicing elit. Veniam tenetur ' },
    { id: 4, message: 'm ipsum, dolor si' },
    { id: 5, message: 'etur culpa ullam labor' },
  ]

  return (
    <div className={classes.dialogs}>
      <h2 className={classes.title}>Messages</h2>
      <div className={classes.info}>
        <div className={classes.users}>
          <UserItem name={userData[0].name} id={userData[0].id} />
          <UserItem name={userData[1].name} id={userData[1].id} />
          <UserItem name={userData[2].name} id={userData[2].id} />
          <UserItem name={userData[3].name} id={userData[3].id} />
          <UserItem name={userData[4].name} id={userData[4].id} />
        </div>
        <div className={classes.messages}>
          <Message message={messageData[0].message} />
        </div>
      </div>

    </div>
  )
}

export default Messages;
import classes from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <ul className={classes.list}>
        <li><a href='#' className={classes.link}>Profile</a></li>
        <li><a href='#' className={classes.link}>Messages</a></li>
        <li><a href='#' className={classes.link}>News</a></li>
        <li><a href='#' className={classes.link}>Settings</a></li>
      </ul>
    </div>
  )
}

export default Sidebar;
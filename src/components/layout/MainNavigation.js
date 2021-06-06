import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Fitness Classes</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Fitness Classes</Link>
          </li>
          <li>
            <Link to="/new-session">Add New Class</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

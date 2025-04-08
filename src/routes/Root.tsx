import styles from "../styles/Root.module.css";
import { Outlet, Link } from "react-router";

export default function Root() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/about`}>About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

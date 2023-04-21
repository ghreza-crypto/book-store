import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import PersonIcon from '@mui/icons-material/Person';

const Navigation = () => (
  <nav className="navbar">
    <div className="navLinks">
      <h1>Bookstore CMS</h1>
      <NavLink to="/">Books</NavLink>
      <NavLink to="categories">Categories</NavLink>
    </div>
    <button type="button" className="iconButton">
      <PersonIcon />
    </button>
  </nav>
);

export default Navigation;

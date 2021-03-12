import { Link } from 'react-router-dom';

const Header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/signup' },
    !currentUser && { label: 'Sign In', href: '/signin' },
    currentUser && { label: 'Account', href: `/user/${currentUser._id}` },
    currentUser && { label: 'Sign Out', href: '/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <Link to={href}>
            <span className="nav-link">{label}</span>
          </Link>
        </li>
      );
    });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <Link to={'/'}>
        <span className="navbar-brand">StageWood</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto"></ul>
        <div className="d-flex justify-content-end">
          <ul className="nav ">{links}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

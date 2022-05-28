// import logo from './logo.svg';
import './Navbar.css';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';
const Apparatus = require('../models/Apparatus.js');

function Navbar() {
  const apparatusListItems = Apparatus.getAll().map((apparatus) =>
    <li key={apparatus}>
      <Link className="dropdown-item title-case" to={`moves/${apparatus.toLowerCase()}`}>{apparatus}</Link>
    </li>
  );
  return (
    <header className="Navbar">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
          <a className="navbar-brand" href="#">Jeeves</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Moves by Apparatus</a>
                <ul className="dropdown-menu" aria-labelledby="dropdown01">
                  {apparatusListItems}
                </ul>
              </li>
              </ul>
              <SearchForm />
          </div>
          </div>
      </nav>
    </header>
  );
}

export default Navbar;

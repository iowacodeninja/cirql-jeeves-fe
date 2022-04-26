// import logo from './logo.svg';
import './Navbar.css';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';
const Apparatus = require('../models/Apparatus.js');

function Navbar() {
  const apparatusListItems = Apparatus.getAll().map((apparatus) =>
    <li>
      <Link className="dropdown-item title-case" to={'moves/' + apparatus.toLowerCase()}>{apparatus}</Link>
    </li>
  );
  return (
    <header className="Navbar">
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <div class="container-fluid">
          <a class="navbar-brand" href="#">Jeeves</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Moves by Apparatus</a>
                <ul class="dropdown-menu" aria-labelledby="dropdown01">
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

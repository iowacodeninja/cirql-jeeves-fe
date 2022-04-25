// import logo from './logo.svg';
import './Navbar.css';
// import { Link } from 'react-router-dom';

function getApparati(){
  return ['Silks', 'Lyra', 'Trapeze', 'Sling', 'Rope'];
}

function Navbar() {
  const apparatii = getApparati();
  const apparatusListItems = apparatii.map((apparatus) =>
    <li>
      {/* <Link className="dropdown-item" to="/moves/{apparatus}">{apparatus}</Link> */}
      <a class="dropdown-item" to="/moves/lyra">{apparatus}</a>
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
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Apparatus</a>
                <ul class="dropdown-menu" aria-labelledby="dropdown01">
                  {apparatusListItems}
                </ul>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="/search">Search</a>
                  {/* <Link className="nav-link" to="/search">Search</Link> */}
              </li>
              </ul>
              <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
          </div>
          </div>
      </nav>
    </header>
  );
}

export default Navbar;

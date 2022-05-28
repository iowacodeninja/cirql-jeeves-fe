import './Sidebar.css';
import { Link } from 'react-router-dom';
const Apparatus = require('../models/Apparatus.js');

function Sidebar() {
  const apparatusListItems = Apparatus.getAll().map((apparatus) =>
    <li className="nav-item" key={apparatus}>
      <Link className="nav-link title-case" to={`moves/${apparatus}`}>{apparatus}</Link>
    </li>
  );
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>Choose an Apparatus</span>          
      </h6>
      <div>
        <ul className="nav flex-column">
          {apparatusListItems}
        </ul>            
      </div>
    </nav>
  );
}

export default Sidebar;

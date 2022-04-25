import './Sidebar.css';
import { Link } from 'react-router-dom';
const Apparatus = require('../models/Apparatus.js');

function Sidebar() {
  const apparatusListItems = Apparatus.getAll().map((apparatus) =>
    <li class="nav-item">
      <Link className="nav-link title-case" to={'moves/' + apparatus}>{apparatus}</Link>
    </li>
  );
  return (
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>Choose an Apparatus</span>          
      </h6>
      <div>
        <ul class="nav flex-column">
          {apparatusListItems}
        </ul>            
      </div>
    </nav>
  );
}

export default Sidebar;

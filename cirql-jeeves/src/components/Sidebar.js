import './Sidebar.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function getApparati(){
  return ['Silks', 'Lyra', 'Trapeze', 'Sling', 'Rope'];
}

function Sidebar() {
  const apparatii = getApparati();
  const apparatusListItems = apparatii.map((apparatus) =>
    <li class="nav-item">
      {/* <Link className="nav-link" to="/moves/lyra">{apparatus}</Link> */}
      <a class="nav-link" href="/moves/lyra">{apparatus}</a>
    </li>
  );
  return (
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <Router>        
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Choose an Apparatus</span>          
        </h6>
        <div>
          <ul class="nav flex-column">
            {apparatusListItems}
          </ul>            
        </div>
      </Router>        
    </nav>
  );
}

export default Sidebar;

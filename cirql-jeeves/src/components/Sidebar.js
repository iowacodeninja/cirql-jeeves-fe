import './Sidebar.css';

function Sidebar() {
  return (
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse fixed-top mt-5">
       
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Choose an Apparatus</span>          
        </h6>
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Lyra
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Trapeze
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Silks
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Customers
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Reports
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Integrations
            </a>
          </li>
        </ul>
    </nav>
  );
}

export default Sidebar;

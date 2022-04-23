import './Sidebar.css';

function Sidebar() {
  const apparatii = ['Silks', 'Lyra', 'Trapeze', 'Sling', 'Rope'];
  const listItems = apparatii.map((apparatus) =>
    <li class="nav-item">
      <a class="nav-link" href="/{apparatus}">
        {apparatus}
      </a>
    </li>
  );
  return (
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse fixed-top mt-5">
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Choose an Apparatus</span>          
        </h6>
        <ul class="nav flex-column">
          {listItems}
        </ul>
    </nav>
  );
}

export default Sidebar;

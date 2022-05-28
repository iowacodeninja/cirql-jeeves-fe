import './ApparatusList.css';
import { Link } from 'react-router-dom';

const Apparatus = require('../models/Apparatus.js');

function ApparatusList() {
  const listItems = Apparatus.getAll().map((apparatus) =>
    <div className="col" key={apparatus.toLowerCase()}>
      <div className="card shadow-sm">
        <Link to={`moves/${apparatus.toLowerCase()}`} className={`apparatus ${apparatus.toLowerCase()}`}>
          {apparatus}
        </Link>
        <div className="card-body">
          <h5 className="card-title title-case">
            <Link to={`moves/${apparatus.toLowerCase()}`} className="link-dark apparatus-link">{apparatus}</Link>
          </h5>         
        </div>
      </div>
    </div>
  );
  return (
    <div className="py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {listItems}
        </div>
      </div>
    </div>
  );
}

export default ApparatusList;

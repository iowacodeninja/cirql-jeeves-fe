import './List.css';
import { Link } from 'react-router-dom';
const Apparatus = require('../models/Apparatus.js');

function List() {
  const listItems = Apparatus.getAll().map((apparatus) =>
    <div class="col">
      <div class="card shadow-sm">
        <Link to={'moves/' + apparatus.toLowerCase()} className={'apparatus ' + apparatus.toLowerCase()}>{apparatus}</Link>
        <div class="card-body">
          <p class="card-text"><strong>{apparatus}</strong></p>         
        </div>
      </div>
    </div>
  );
  return (
    <div class="py-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {listItems}
        </div>
      </div>
    </div>
  );
}

export default List;

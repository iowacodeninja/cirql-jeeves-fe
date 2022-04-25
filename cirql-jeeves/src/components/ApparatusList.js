import './List.css';
import { Link } from 'react-router-dom';
import silksThumb from '../img/silks.jpeg';
import lyraThumb from '../img/lyra.jpeg';
import trapThumb from '../img/trapeze.jpeg';
import slingThumb from '../img/sling.jpeg';

const Apparatus = require('../models/Apparatus.js');
const ApparatusThumbs = {
  silks: silksThumb,
  lyra: lyraThumb,
  trapeze: trapThumb,
  sling: slingThumb
};

function ApparatusList() {
  const listItems = Apparatus.getAll().map((apparatus) =>
    <div class="col">
      <div class="card shadow-sm">
        <Link to={'moves/' + apparatus.toLowerCase()} className={'apparatus ' + apparatus.toLowerCase()} style={{backgroundImage: 'url(' + ApparatusThumbs[apparatus.toLowerCase()] + ')'}}>
          {apparatus}
        </Link>
        <div class="card-body">
          <p class="card-text"><strong class="title-case">{apparatus}</strong></p>         
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

export default ApparatusList;

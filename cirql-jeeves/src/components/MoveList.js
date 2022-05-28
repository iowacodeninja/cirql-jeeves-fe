import './MoveList.css';
import { Link } from 'react-router-dom';

const Move = require('../models/Move.js');

function MoveList() {
  const listItems = Move.getAll().map((move) =>
    <div className="col" key={move.id}>
      <div className="card shadow-sm">
        <Link to={`move/${move.id}/`} className={'move'} style={{backgroundImage: `url('${move.mediaLocation[0]}')`}}>
          {move.name}
        </Link>
        <div className="card-body">
          <h5 class="card-title title-case"> 
            <Link to={`move/${move.id}/`} title={`View ${move.name} Details`} className="link-dark move-link">
              {move.name}
            </Link>
          </h5>
          <p className="card-text">
            <Link to={`apparatus/${move.apparatus}/`} className={'badge bg-info text-dark move-tag'}>
              {move.apparatus}
            </Link>
          </p>         
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

export default MoveList;

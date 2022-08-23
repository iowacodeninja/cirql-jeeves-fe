import './MoveList.css';
import { Link, useParams } from 'react-router-dom';

const Move = require('../models/Move.js');

function MoveList() {
  let params = useParams();
  const listItems = Move.getByApparatus(params.apparatusId, params.moveId).map((move) => {
    return (
      <div className="col" key={move.id}>
        <div className="card shadow-sm">
          <Link to={`/move/${move.id}`} className='move' style={{backgroundImage: `url('${move.media[0].src}')`}}>
            {move.name}
          </Link>
          <div className="card-body">
            <h5 className="card-title title-case"> 
              <Link to={`/move/${move.id}`} title={`View ${move.name} Details`} className="link-dark move-link">
                {move.name}
              </Link>
            </h5>
            <p className="card-text">
              <Link to={`/moves/${move.apparatus.toLowerCase()}`} className={'badge bg-info move-tag title-case'}>
                {move.apparatus}
              </Link>
            </p>         
          </div>
        </div>
      </div>
    )}
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

import './MoveDetail.css';

const Move = require('../models/Move.js');

function MoveDetail() {  
  return (
    <div className="py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {Move.getDetail()}
        </div>
      </div>
    </div>
  );
}

export default MoveDetail;

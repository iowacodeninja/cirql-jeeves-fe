import './MoveDetail.css';
import { useParams, Link } from "react-router-dom";
import MoveList from './MoveList'
const Move = require('../models/Move.js');

function displayCredits(credits){
  return credits.map(credit => `${credit.type}: ${credit.value}`).join('; ');
}

function MoveDetail() {  
  let params = useParams();
  let move = Move.getDetail(params.moveId);
  params.apparatusId = move.apparatus;
  const aliases = move.aliases.map((alias) =>
    <li key={alias}>{alias}</li>
  );
  const thumbnails = move.media.map((img) =>
    <img src={img.src} class="img-thumbnail me3" alt={`${move.name} (${move.apparatus})`} />
  );
  
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
      
          <div className="col-md-6 move-media">
            <figure class="figure">
              <img className="img-fluid" src={move.media[0].src} alt={move.name} />
              <figcaption class="figure-caption">{displayCredits(move.media[0].credits)}</figcaption>
            </figure>
            {thumbnails}
          </div>
      
          <div className="col-md-6">
            <h1 className="my-4">{move.name}<br/>
              <small><Link to={`/moves/${move.apparatus.toLowerCase()}`} className={'fs-6 badge bg-info move-tag title-case'}>{move.apparatus}</Link></small>
            </h1>
            <h3 className="my-3">Also Known As...</h3>
            <ul>
              {aliases}
            </ul>
            
            <h3 className="my-3">Instructions</h3>
            <p>{move.instructions}</p>
          </div>
      
        </div>
      
        {/* <h3 className="my-4">Other Sling Moves</h3>
        <MoveList /> */}
      
      </div>
    </div>
    
  );
}

export default MoveDetail;

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
  const carouselImages = move.media.map((img, ix) => 
    <div className={`carousel-item item-${ix} ${(ix === 0) ? ' active' : ''}`} key={'img-'+ix}>
      <figure className="figure">
        <a href={img.src} target="_blank"><img src={img.src} className="d-block w-100" alt={`${move.name} (${move.apparatus})`} /></a>
      </figure>
      <div class="carousel-caption figure-caption d-none d-md-block">
        <p>{displayCredits(img.credits)}</p>
      </div>
    </div>
  );
  const carouselThumbs = move.media.map((img, ix) => 
    <a href={img.src} target="_blank" data-bs-target="#carouselExampleFade"  data-bs-slide-to={ix}>
      <img 
      src={img.src} 
      className="img-thumbnail me3" 
      alt={`${move.name} (${move.apparatus})`} />
    </a>
  );
  let thumbnailNav = '';
  if (move.media.length > 1) {
    thumbnailNav = <nav className="move-thumbnails">{carouselThumbs}</nav>;
  }

  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
      
          <div className="col-md-6 move-media">
            <div id="carouselExampleFade" className="carousel slide carousel-fade carousel-dark">
              <div className="carousel-inner">
                {carouselImages}
              </div>
              <button className={"carousel-control-prev"} type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {thumbnailNav}
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

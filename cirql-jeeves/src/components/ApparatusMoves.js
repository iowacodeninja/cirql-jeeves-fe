import MoveList from './MoveList'
import { useParams } from "react-router-dom";

function ApparatusMoves() {
  let params = useParams();
  return (
    <div className="px-3 py-3 my-4">
      <h1 className="display-5 fw-bold text-center title-case">{params.apparatusId} Moves</h1>
      <MoveList apparatusId />
    </div>
  );
}

export default ApparatusMoves;

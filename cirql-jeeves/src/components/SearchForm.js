import './SearchForm.css';
import {
  Link
} from "react-router-dom";

function SearchForm() {
  return (
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      <Link className="btn btn-outline-success" to="/search">Search</Link>
    </form>
  );
}

export default SearchForm;

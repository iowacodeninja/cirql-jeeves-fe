import './SearchResults.css';
import SearchForm from './SearchForm'
import MoveList from './MoveList'

function SearchResults() {
  return (
    <div id="search" className="px-3 py-3 my-4">
      <h1 className="display-5 fw-bold text-center">Search Results</h1>
      <SearchForm />
      <MoveList />
    </div>
  );
}

export default SearchResults;

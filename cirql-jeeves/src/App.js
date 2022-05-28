//import logo from './logo.svg';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import MoveDetail from './components/MoveDetail'
import ApparatusMoves from './components/ApparatusMoves'
import ApparatusList from './components/ApparatusList'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'
import './App.css';
import {
  Routes,
  Route,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container-fluid mt-5">

        <div className="row">
          <Sidebar />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">               
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="search" element={<SearchResults />}>
                <Route path=":query" element={<SearchResults />} />
              </Route>
              <Route path="moves">
                <Route path=":apparatusId" element={<ApparatusMoves />}>                  
                </Route>
              </Route>
              <Route path="move">
                <Route path=":moveId" element={<MoveDetail />} />
              </Route>
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div id="home">
      <section>
        <Hero />
        <div className="container">
          <SearchForm />
        </div>
      </section>
      
      <h2 className="visually-hidden">Select an Apparatus</h2>
      <ApparatusList />
    </div>
  )
}

export default App;

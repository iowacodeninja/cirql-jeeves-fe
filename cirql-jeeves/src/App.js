import logo from './logo.svg';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import ApparatusList from './components/ApparatusList'
import SearchForm from './components/SearchForm'
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div class="container-fluid mt-5">

        <div class="row">
          <Sidebar />

          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">               
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="search" element={<Search />} />
              {/* <Route path="moves" element={<Moves />} /> */}
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
        <div class="container">
          <SearchForm />
        </div>
      </section>
      
      <h2 class="visually-hidden">Select an Apparatus</h2>
      <ApparatusList />
    </div>
  )
}

function Search() {
  return (
    <div id="search">
      <section>
        <Hero />
      </section>
      <SearchForm />
    </div>
  )
}

export default App;

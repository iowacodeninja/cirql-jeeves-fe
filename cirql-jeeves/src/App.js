import logo from './logo.svg';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import List from './components/List'
import './App.css';

// TODO: figure out routing: https://reactrouter.com/docs/en/v6/getting-started/installation

function App() {
  return (
    <div className="App">
      <Navbar />

      <div class="container-fluid mt-5">

        <div class="row">
          <Sidebar />

          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">            
            <section>
              <Hero />
            </section>
            <h2 class="visually-hidden">Select an Apparatus</h2>
            <List />
            
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;

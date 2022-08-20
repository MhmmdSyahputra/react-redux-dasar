import './App.css';
import { AddKontak, ListKontak, Partikel } from './components';
function App() {

  return (
    <div className="App">
      <div className="container">

        <div className="row d-flex justify-content-center">
          <div className="col-md-6 text-light">
            <Partikel />
            <h1 className='text-center'>Kontak With redux</h1>
            <hr className='mb-5' />

            <AddKontak />
            <ListKontak />

          </div>
        </div>
      </div>

    </div >
  );
}

export default App;

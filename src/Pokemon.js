import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Go on an adventure to collect them all!
        </p>
        <b>Starter Pokemons:</b><br/>
        <ul>
          <li>
            <a href="/charizard">Charizard</a>
          </li>
          <li>
            <a className="disabled" no-href="/pikachu" href="#">Pikachu</a>
          </li>
          <li>
            <a className="disabled" no-href="/ditto" href="#">Ditto</a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;

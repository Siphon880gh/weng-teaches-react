import logo from './logo.png';
import './App.css';
import './App-Override-Animation.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-2" alt="logo">
        Cool React Tricks
        </div>
        <p>
          What React trick do you want to see?
        </p>
        <ul>
          <li>
            <a href="/pokemon">Pokemon API for sprites!</a>
          </li>

          <li>
            <a href="/json">Import JSON for quiz game!</a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Home;

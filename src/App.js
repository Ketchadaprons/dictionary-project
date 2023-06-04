import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="book" />
        </main>

        <footer className="text-center App-footer">
          <small>
            Coded by Ketchadapron and it is{" "}
            <a
              href="https://github.com/Ketchadaprons/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              open-sourced on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary keyword="run" />
        </main>
        <footer className="App-footer pb-3 mt-3">
          <a href="https://github.com/Oksana-Kryvulya/dictionary-react-app">
            Open source code
          </a>{" "}
          coded by Oksana Kryvulya
        </footer>
      </div>
    </div>
  );
}

import logo from './logo.svg';
import './App.scss';
import MyComponent from './examples/MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent />
      </header>

    </div>
  );
}

export default App;

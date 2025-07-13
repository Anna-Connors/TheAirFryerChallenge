import logo from './spidr-logo.png';
import './App.css';
import OrderForm from './components/OrderForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="form-container">
        <OrderForm />
      </div>
    </div>
  );
}

export default App;

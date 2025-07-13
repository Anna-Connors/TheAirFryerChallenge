import logo from './spidr-logo.png';
import './App.css';
import OrderForm from './components/OrderForm';
import fryer from './airfryer.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="overlap-container">
        <div className="form-container">
          <OrderForm />
        </div>
        <div className="image-content">
          <img src={fryer} alt="air fryer" />
        </div>
      </div>
      <footer className="App-footer">
        <p>Created by: Anna Connors</p>
      </footer>

    </div>
  );
}

export default App;

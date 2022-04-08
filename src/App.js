// import { store } from './redux/store'; import inside index.js so all app has access to store
import './App.css';
import CompA from './components/CompA';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
    <Counter/>
    <CompA/>
    </div>
  );
}

export default App;

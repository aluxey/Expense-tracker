import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"; 
import {Auth} from "./pages/auth/index";
import { ExpneseTracker } from './pages/expense-tracker';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />}/>
          <Route path="/expense-tracker" exact element={<ExpneseTracker />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

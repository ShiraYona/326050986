import logo from './logo.svg';
import './App.css';
import AppRoutes from './appRoutes';
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
      </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import './style.sass';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

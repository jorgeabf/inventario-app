import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/home";
import Register from "./routes/register";
import Store from "./store/store";
import Edit from "./routes/edit";
import Menu from "./components/Menu";

function App() {
   return (
      <Store>
         <Menu />
         <div className="App">
            <Routes>
               <Route
                  path="/"
                  element={<Home />}
               />
               <Route
                  path="register"
                  element={<Register />}
               />
               <Route
                  path="edit/:id"
                  element={<Edit />}
               />
            </Routes>
         </div>
      </Store>
   );
}

export default App;

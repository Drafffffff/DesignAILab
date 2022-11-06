import { Route } from "@solidjs/router";
import { A } from "@solidjs/router";
import { Routes } from "@solidjs/router";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav"
function App() {
  return (
    <div>
    <Nav/>
    <Routes>
      <Route path={"/"} element={HomePage}></Route>
      <Route path={"/aa"} element={HomePage}></Route>
    </Routes>
    </div>
  );
}

export default App;

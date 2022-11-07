import { Route } from "@solidjs/router";
import { Routes } from "@solidjs/router";
import HomePage from "./pages/HomePage";
import Join from "./pages/Join";
import News from "./pages/News";
import Project from "./pages/Porjects";
import Research from "./pages/Research";
import PageNotFound from "./pages/PageNotFound"
function App() {
  return (
    <div>
    <Routes>
      <Route path={"/"} element={HomePage}></Route>
      <Route path={"/project"} element={Project}></Route>
      <Route path={"/research"} element={Research}></Route>
      <Route path={"/news"} element={News}></Route>
      <Route path={"/join"} element={Join}></Route>
      <Route path="*" element={() => <PageNotFound />} />
    </Routes>
    </div>
  );
}

export default App;

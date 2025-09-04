import { Route, Routes } from "react-router";

import { CharacterPage } from "./pages/CharacterPage";
import { MainPage } from "./pages/MainPage";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path={""} element={<MainPage />} />
        <Route path={"characters/:id"} element={<CharacterPage />} />
      </Routes>
    </>
  );
}
export default App;

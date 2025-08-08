import { Route, Routes } from "react-router";
import "./App.css";
import { CharacterPage } from "./pages/CharacterPage";
import { MainPage } from "./pages/MainPage";

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

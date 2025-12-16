import {Routes, Route} from "react-router-dom";
import App from "./App.jsx";
import PokeApi from "./Routes/PokeApi.jsx";
import Login from "./Routes/Login.jsx";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}>
        <Route index element={<Login />} />
        <Route path="pokeapi" element={<PokeApi />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
};

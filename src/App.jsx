import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Narbar from "./components/Narbar";
import { RecipeProvider } from "./components/RecipeContext";
import RecipeInstruction from "./components/RecipeInstruction";

function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <Narbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/detail" element={<RecipeInstruction />} />
        </Routes>
      </BrowserRouter>
    </RecipeProvider>
  );
}

export default App;

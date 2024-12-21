import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Mainlayout from "./Mainlayout";
import New from "./components/NewSong";
import Artists from "./components/Artists";
import Albums from "./components/Albums";
import Singles from "./components/Singles";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Mainlayout />}>
        <Route index element={<Home />} />
        <Route path="/New" element={<New />} />
        <Route path="/Artists" element={<Artists />} />
        <Route path="/Singles" element={<Singles />} />
        <Route path="/Albums" element={<Albums />} />
    </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

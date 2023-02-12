import React from "react";
import Dest from "./components/Dest";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes , Route} from 'react-router-dom'
import Description from "./pages/Description";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/dest' element={<Dest />} />
        <Route path="/description/:id" element={<Description />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

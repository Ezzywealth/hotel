import Footer from "./Components/Home/Footer";

import Homepage from "./Components/Home/Homepage";
import Navbar from "./Components/Home/Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Rooms from "./Components/Home/Rooms";
import RoomsAndSuites from "./Components/Rooms and suites/RoomsAndSuites";
import Facilities from "./Components/Facilities/Facilities.jsx";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/rooms' element={<RoomsAndSuites />} />

        <Route path='/facilities' element={<Facilities />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

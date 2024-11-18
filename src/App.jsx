import { Route, Routes } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import "./global.css";
import Home from "./_root/pages/Home";
import Events from "./_root/pages/Events";
import Sermons from "./_root/pages/Sermons";
import About from "./_root/pages/About";
import SermonDetails from "./_root/pages/SermonDetails";

function App() {
  return (
    <main className="flex h-dvh font-lateef font-extralight">
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/sermons/:id" element={<SermonDetails />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="*" element={<Home />} /> */}
        </Route>
      </Routes>
    </main>
  );
}

export default App;

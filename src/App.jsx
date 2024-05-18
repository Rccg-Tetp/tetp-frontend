import { Route, Routes } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import "./global.css";
import Home from "./_root/pages/Home";

function App() {
  return (
    <main className="flex h-screen font-lateef font-extralight">
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;

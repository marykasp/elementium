import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Analytics from "./pages/Analytics";
import Build from "./pages/Build";
import Authentication from "./pages/Authentication";
import Settings from "./pages/Settings";
import Storage from "./pages/Storage";
import Blank from "./pages/Blank";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="authentication" element={<Authentication />} />
            <Route path="settings" element={<Settings />} />
            <Route path="storage" element={<Storage />} />
            <Route path="stats" element={<Blank />} />
            <Route path="analytics/:aID" element={<Analytics />} />
            <Route path="build/:bID" element={<Build />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { Routes, Route, HashRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Warning from "./pages/Warning";

function App() {
  const isMobile = window.matchMedia("max-width: 768px").matches;
  console.log(isMobile);

  return (
    <HashRouter>
      <Routes>
        {isMobile ? (
          <Route path="/" element={<Landing />} />
        ) : (
          <Route path="/" element={<Warning />} />
        )}
      </Routes>
    </HashRouter>
  );
}

export default App;

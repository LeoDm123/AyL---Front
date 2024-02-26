import { useEffect, useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Warning from "./pages/Warning";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobileKeywords = [
      "Android",
      "webOS",
      "iPhone",
      "iPad",
      "iPod",
      "BlackBerry",
      "Windows Phone",
    ];
    const isMobileUserAgent = mobileKeywords.some((keyword) =>
      userAgent.includes(keyword)
    );

    setIsMobile(isMobileUserAgent);
  }, []);

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

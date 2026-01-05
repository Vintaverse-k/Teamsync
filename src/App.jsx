import { useState, useEffect } from "react"; // add useState & useEffect
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Sales from "./pages/Sales";
import Messages from "./pages/Messages";

function App() {
  const [theme, setTheme] = useState("light"); // default theme

  // Body pe theme class apply karna
  useEffect(() => {
    document.body.classList.remove("light", "dark"); // purani theme remove
    document.body.classList.add(theme); // nayi theme add
  }, [theme]);

  return (
    <BrowserRouter>
      <Layout theme={theme} setTheme={setTheme}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

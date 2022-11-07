import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./viewport/global/Topbar";
import Sidebar from "./viewport/global/Sidebar";
import Dashboard from "./viewport/dashboard";
import Team from "./viewport/team";
import Invoices from "./viewport/invoices";
import Contacts from "./viewport/contacts";
import Bar from "./viewport/bar";
import Form from "./viewport/form";
import Line from "./viewport/line";
import Pie from "./viewport/pie";
import FAQ from "./viewport/faq";
import Geography from "./viewport/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./viewport/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

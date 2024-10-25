import { Satellites } from "@/pages/Satellites/Satellites";
import { SideNav } from "./SideNav/SideNav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Reports } from "@/pages/Reports/Reports";
import { ApolloProvider } from "@apollo/client";
import client from "@/ApolloClient";
import { SatelliteDetails } from "@/pages/Satellites/SatelliteDetails";
import { ReportDetails } from "@/pages/Reports/ReportDetails";
import { Dashboard } from "@/pages/Dashboard/Dashboard";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="app">
          <SideNav />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/satellites" element={<Satellites />} />
              <Route path="/satellites/:id" element={<SatelliteDetails />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/reports/:id" element={<ReportDetails />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

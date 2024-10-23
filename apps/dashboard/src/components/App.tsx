import { HomePage } from "@/pages/Home/Home";
import { SideNav } from "./SideNav/SideNav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Reports } from "@/pages/Reports/Reports";
import { ApolloProvider } from "@apollo/client";
import client from "@/ApolloClient";
import { SatelliteDetails } from "@/pages/Home/SatelliteDetails";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="app">
          <SideNav />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/satellite/:id" element={<SatelliteDetails />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

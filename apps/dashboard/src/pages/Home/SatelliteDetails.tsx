import { useGetSatelliteDetailsQuery } from "@/generated/graphql";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./SatelliteDetails.css";

export const SatelliteDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useGetSatelliteDetailsQuery({
    variables: { id: id ?? "" },
  });
  const navigate = useNavigate();

  if (!id || !data?.allSatellites) {
    return null;
  }

  const satellite = data.allSatellites[0];

  console.log(data);
  return (
    <div>
      {id ? (
        <span>
          <span
            className="dashboard-link"
            onClick={() => {
              navigate("/");
            }}
          >
            Dashboard
          </span>{" "}
          / Satellite / {satellite?.name}
        </span>
      ) : (
        <span>Dashboard</span>
      )}
      <div className="satellite-details">
        <div className="header">
          <h2>{satellite?.name}</h2>
          <p>{satellite?.description}</p>
        </div>
        <div className="grid-container">
          <div className="grid">
            <img
              src={satellite?.image}
              alt={`${satellite?.name}`}
              className="satellite-image"
            />
            <div className="stack">
              <div className="card">
                <label>Status</label>
                <div className="card-details">
                  <span className="icon">&#128640;</span>
                  <h3>{satellite?.status}</h3>
                </div>
              </div>
              <div className="card">
                <div className="info-details">
                  <label>Bus Type</label>
                  <p> {satellite?.busType}</p>
                  <label>Manufacturer</label>
                  <p> {satellite?.manufacturer}</p>
                </div>
              </div>
              <div className="large-card">
                <h2>Launch Details</h2>
                {satellite?.Launch ? (
                  <div>
                    <p>
                      Date:
                      {new Date(satellite?.Launch.date).toLocaleDateString()}
                    </p>
                    <p>Status: {satellite?.Launch.status}</p>
                    <p>Outcome: {satellite?.Launch.outcome}</p>
                    <p>Provider: {satellite?.Launch.provider}</p>
                    <p>Rocket: {satellite?.Launch.rocket}</p>
                  </div>
                ) : (
                  <p>No launch details available.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="payloads-section">
          <h2>Payloads</h2>
          {satellite?.Payloads && satellite?.Payloads.length > 0 ? (
            <ul>
              {satellite?.Payloads.map(payload => (
                <li key={payload?.id}>
                  <p>Name: {payload?.name}</p>
                  <p>Description: {payload?.description}</p>
                  <p>Status: {payload?.status}</p>
                  <p>Category: {payload?.category}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No payloads available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

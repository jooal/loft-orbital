import { useGetSatelliteDetailsQuery } from "@/generated/graphql";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./SatelliteDetails.css";
import { PayloadsTable } from "@/components/PayloadsTable/PayloadsTable";

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

  return (
    <div>
      {id ? (
        <span>
          <span
            className="breadcrumb-link"
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
          {satellite?.Payloads && satellite?.Payloads.length > 0 ? (
            <PayloadsTable data={satellite.Payloads} />
          ) : (
            <p>No payloads available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

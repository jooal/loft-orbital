import { Payload, useGetSatelliteDetailsQuery } from "@/generated/graphql";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Satellites.css";
import { PayloadsTable } from "@/components/PayloadsTable/PayloadsTable";
import { Card } from "@/components/Card/Card";

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
  const payloads = satellite?.Payloads as Payload[];

  const StatusContent = () => (
    <>
      <label>Status</label>
      <div className="card-details">
        <span className="icon">&#128640;</span>
        <h3>{satellite?.status}</h3>
      </div>
    </>
  );

  const InfoContent = () => (
    <div className="info-details">
      <label>Bus Type</label>
      <p> {satellite?.busType}</p>
      <label>Manufacturer</label>
      <p> {satellite?.manufacturer}</p>
    </div>
  );

  const LaunchContent = () => (
    <div>
      <h3>Launch Details</h3>
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
          <p>Coords: {satellite?.coordinates}</p>
          <p>Altitude: {satellite?.altitude}</p>
        </div>
      ) : (
        <p>No launch details available.</p>
      )}
    </div>
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {id ? (
        <span>
          <span
            className="breadcrumb-link"
            onClick={() => {
              navigate("/satellites");
            }}
          >
            Satellites
          </span>{" "}
          / {satellite?.name}
        </span>
      ) : (
        <span>Satellites</span>
      )}
      <div className="satellite-details">
        <div className="header">
          <h2>{satellite?.name}</h2>
          <p>{satellite?.description}</p>
        </div>
        <div>
          <div className="grid">
            <img
              src={satellite?.image}
              alt={`${satellite?.name}`}
              className="satellite-image"
            />
            <div className="stack">
              <div className="details-grid">
                <Card content={<StatusContent />} />
                <Card content={<InfoContent />} />
              </div>
              <Card content={<LaunchContent />} />
            </div>
          </div>
        </div>

        <div className="payloads-section">
          {payloads && payloads.length > 0 ? (
            <PayloadsTable data={payloads} />
          ) : (
            <p>No payloads available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

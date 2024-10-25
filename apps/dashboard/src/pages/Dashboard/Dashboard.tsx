import { Card } from "@/components/Card/Card";
import "./Dashboard.css";
import { Constellation, useDashboardDataQuery } from "@/generated/graphql";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface OverviewCardProps {
  inOrbitCount: number;
  decommCount: number;
  plannedCount: number;
}

const OverviewCard = ({
  inOrbitCount,
  decommCount,
  plannedCount,
}: OverviewCardProps) => {
  return (
    <>
      <div className="row">
        <div className="pairing">
          <span className="status-orbit"></span>
          <p>In Orbit</p>
        </div>
        <span>---------------------</span>
        <p>{inOrbitCount}</p>
      </div>
      <div className="row">
        <div className="pairing">
          <span className="status-decommissioned"></span>
          <p>Decommissioned</p>
        </div>
        <span>---------------------</span>
        <p>{decommCount}</p>
      </div>
      <div className="row">
        <div className="pairing">
          <span className="status-planned"></span>
          <p>Planned</p>
        </div>
        <span>---------------------</span>
        <p>{plannedCount}</p>
      </div>
    </>
  );
};

interface ConstellationCardProps {
  constellations: Constellation[];
}

const ConstellationCard = ({ constellations = [] }: ConstellationCardProps) => {
  return (
    <div>
      {constellations.map(c => (
        <div key={c.id} className="constellation-flex">
          <p>{c.name}:</p>
          <p>{c?.Satellites?.map(s => s?.name).join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export const Dashboard = () => {
  const { data, loading, error } = useDashboardDataQuery();

  if (loading)
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );

  const satellite = data?.allSatellites;

  const inOrbitStatus =
    satellite?.filter(satellite => satellite?.status === "In Orbit") ?? [];

  const decommStatus =
    satellite?.filter(satellite => satellite?.status === "Decommissioned") ??
    [];

  const plannedStatus =
    satellite?.filter(satellite => satellite?.status === "Planned") ?? [];

  const constellations = data?.allConstellations as Constellation[];

  if (error)
    return (
      <div className="loading">
        <p>Error fetching data</p>
      </div>
    );

  return (
    <div>
      <div className="top-header">
        <span>Dashboard</span>
      </div>
      <div className="dashboard-container-grid">
        <div className="dashboard-top-grid">
          <Card
            header="Satellites Overview"
            content={
              <OverviewCard
                inOrbitCount={inOrbitStatus?.length ?? 0}
                decommCount={decommStatus?.length ?? 0}
                plannedCount={plannedStatus?.length ?? 0}
              />
            }
          />

          <Card
            header="Constellations"
            content={<ConstellationCard constellations={constellations} />}
          />
        </div>
        <div className="map-container">
          <p>Active Satellite Locations</p>
          <MapContainer
            id="map"
            center={[20, 0]}
            zoom={2}
            style={{ height: "100%", width: "100%" }}
            worldCopyJump={true}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {inOrbitStatus.map(
              satellite =>
                satellite?.coordinates &&
                satellite?.coordinates.length === 2 && (
                  <Marker
                    key={satellite?.id}
                    position={[
                      satellite.coordinates[0] ?? 0,
                      satellite.coordinates[1] ?? 0,
                    ]}
                  >
                    <Popup>
                      <strong>{satellite?.name}</strong>
                      <br />
                      Status: {satellite?.status}
                      <br />
                      Coordinates: [{satellite?.coordinates[0]},{" "}
                      {satellite?.coordinates[1]}]
                    </Popup>
                  </Marker>
                )
            )}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

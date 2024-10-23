import { useState } from "react";
import "./SatelliteTable.css";
import { useNavigate } from "react-router-dom";

interface Satellite {
  id: string | undefined;
  name: string | undefined;
  status: string | undefined;
  description: string | undefined;
  payloadCount: number;
}

interface SatelliteTableProps {
  data: Satellite[];
  handleSelect: (id: string, name: string) => void;
}

export const SatelliteTable = ({ data, handleSelect }: SatelliteTableProps) => {
  const headers = ["Satellite Name", "Status", "Description", "# of Payloads"];

  const navigate = useNavigate();

  return (
    <div>
      {" "}
      <span>Dashboard</span>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              {headers.map(header => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(satellite => (
              <tr
                key={satellite.id}
                onClick={() => {
                  handleSelect(satellite.id ?? "", satellite.name ?? "");
                  navigate(`/satellite/${satellite.id}`);
                }}
              >
                <td>{satellite.name}</td>
                <td>{satellite.status}</td>
                <td>{satellite.description}</td>
                <td>{satellite.payloadCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

import { useGetSatellitesQuery } from "@/generated/graphql";
import { useState } from "react";

interface CreateReportFormProps {
  setModalClose: (arg: boolean) => void;
}

// enum IncidentType {}

const IncidentTypes = [
  { label: "Maintenance", value: "maintenance" },
  { label: "Incident", value: "incident" },
  { label: "Issue", value: "issue" },
];

export const CreateReportForm = ({ setModalClose }: CreateReportFormProps) => {
  const [formValues, setFormValues] = useState({
    type: "",
    title: "",
    date: new Date(),
    content: "",
    satellite_id: "",
    employee_id: "",
    groundStation_id: "",
  });

  const { data, loading, error } = useGetSatellitesQuery();
  const satellites = data?.allSatellites;
  return (
    <div className="details-form">
      <h3>Create a new report</h3>
      <button
        className="close-button"
        onClick={() => {
          setModalClose(false);
        }}
      >
        X
      </button>
      <div>
        <div className="section-content">
          <div className="form-group">
            <label>Report Title</label>
            <input type="text" placeholder="Ex: Satellite Maintenance Report" />
            <p className="help-text">Summarize the main point of the report.</p>
          </div>
          <div className="form-group">
            <label>Ground Station</label>
            <input type="text" placeholder="Ex: KSAT Hawaii" />
          </div>
          <div className="form-group">
            <label>Report Details</label>
            <textarea />
          </div>
          <div className="select-grid">
            <div className="form-group">
              <label>Date of event</label>
              <input type="date" className="date-picker" />
            </div>

            <div className="form-group">
              <label>Incident Type</label>
              <select>
                {IncidentTypes.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Satellite</label>
              <div className="row">
                <select>
                  {satellites?.map(satellite => (
                    <option key={satellite?.id} value={satellite?.id}>
                      {satellite?.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button className="create-button">Create Report</button>
          </div>
        </div>
      </div>
    </div>
  );
};

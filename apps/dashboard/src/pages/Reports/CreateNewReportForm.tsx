import {
  useCreateReportMutation,
  useGetCreateReportFormDataQuery,
  useGetSatellitesQuery,
} from "@/generated/graphql";
import { useState } from "react";

interface CreateReportFormProps {
  setFormOpen: (arg: boolean) => void;
}

// enum IncidentType {}

const IncidentTypes = [
  { label: "Maintenance", value: "maintenance" },
  { label: "Incident", value: "incident" },
  { label: "Issue", value: "issue" },
];

export const CreateReportForm = ({ setFormOpen }: CreateReportFormProps) => {
  const { data, loading, error } = useGetCreateReportFormDataQuery();
  if (loading) return <div className="details-form">Loading form...</div>;

  const satellites = data?.allSatellites ?? [];
  const groundStations = data?.allGroundStations ?? [];
  const employees = data?.allEmployees ?? [];
  console.log("data", data);

  const [formValues, setFormValues] = useState({
    type: "Maintenance",
    title: "",
    date: new Date(),
    content: "",
    satelliteId: satellites[0]?.id,
    employeeId: employees[0]?.id,
    groundStationId: groundStations[0]?.id ?? "",
  });

  const [formErrors, setFormErrors] = useState({
    title: "",
    content: "",
  });

  const [createReportMutation, { error: mutationError }] =
    useCreateReportMutation({
      onCompleted: () => {
        setFormOpen(false);
        setFormValues({
          type: "Maintenance",
          title: "",
          date: new Date(),
          content: "",
          satelliteId: satellites[0]?.id ?? "",
          employeeId: employees[0]?.id,
          groundStationId: groundStations[0]?.id ?? "",
        });
      },
      refetchQueries: "active",
      onError: () => {
        alert("Something went wrong. Try again.");
      },
    });
  console.log(formValues);

  const handleSubmit = async () => {
    try {
      await createReportMutation({
        variables: {
          title: formValues.title,
          type: formValues.type,
          date: new Date(formValues.date),
          content: formValues.content,
          satellite_id: formValues.satelliteId ?? "",
          employee_id: formValues.employeeId ?? "",
          groundStation_id: formValues.groundStationId,
        },
      });
    } catch (e) {
      console.error("error creating report", e);
    }
  };

  if (
    error ||
    !data ||
    !data.allSatellites ||
    !data.allGroundStations ||
    !data.allEmployees
  ) {
    return (
      <div className="details-form">
        Something went wrong or data is unavailable.
      </div>
    );
  }

  return (
    <div className="details-form">
      <h3>Create a new report</h3>
      <button
        className="close-button"
        onClick={() => {
          setFormOpen(false);
        }}
      >
        X
      </button>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div>
          <div className="section-content">
            <div className="form-group">
              <label>Report Title</label>
              <input
                required
                type="text"
                placeholder="ex: Satellite Maintenance Report"
                value={formValues.title}
                onChange={e => {
                  const value = e.target.value.trim();
                  if (!value) {
                    setFormErrors({
                      ...formErrors,
                      title: "Title is required",
                    });
                  } else {
                    setFormErrors({ ...formErrors, title: "" });
                  }
                  setFormValues({ ...formValues, title: value });
                }}
                onBlur={e => {
                  const value = e.target.value.trim();
                  if (!value) {
                    setFormErrors({
                      ...formErrors,
                      title: "Title is required",
                    });
                  } else {
                    setFormErrors({ ...formErrors, title: "" });
                  }
                }}
              />
              {formErrors.title && (
                <p className="error-text">{formErrors.title}</p>
              )}
              <p className="help-text">
                Summarize the main point of the report.
              </p>
            </div>
            <div className="form-group">
              <label>Ground Station</label>
              <select
                value={formValues.groundStationId}
                onChange={e => {
                  const value = e.target.value;
                  setFormValues({ ...formValues, groundStationId: value });
                }}
              >
                {groundStations.map(option => (
                  <option key={option?.id} value={option?.id}>
                    {option?.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Employee</label>
              <select
                value={formValues.employeeId}
                onChange={e => {
                  const value = e.target.value;
                  setFormValues({ ...formValues, employeeId: value });
                }}
              >
                {employees.map(option => (
                  <option key={option?.id} value={option?.id}>
                    {option?.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Report Details</label>
              <textarea
                onChange={e => {
                  const value = e.target.value.trim();
                  if (!value) {
                    setFormErrors({
                      ...formErrors,
                      content: "Report details are required",
                    });
                  } else {
                    setFormErrors({ ...formErrors, content: "" });
                  }
                  setFormValues({ ...formValues, content: value });
                }}
                onBlur={e => {
                  const value = e.target.value.trim();
                  if (!value) {
                    setFormErrors({
                      ...formErrors,
                      content: "Report details are required",
                    });
                  } else {
                    setFormErrors({ ...formErrors, content: "" });
                  }
                }}
              />
              {formErrors.content && (
                <p className="error-text">{formErrors.content}</p>
              )}
            </div>
            <div className="select-grid">
              <div className="form-group">
                <label>Date of event</label>
                <input
                  type="date"
                  className="date-picker"
                  value={formValues.date.toISOString().substring(0, 10)}
                  onChange={e => {
                    const value = e.target.value;
                    setFormValues({ ...formValues, date: new Date(value) });
                  }}
                />
              </div>

              <div className="form-group">
                <label>Incident Type</label>
                <select
                  value={formValues.type}
                  onChange={e => {
                    const value = e.target.value;
                    setFormValues({ ...formValues, type: value });
                  }}
                >
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
                  <select
                    value={formValues.satelliteId}
                    onChange={e => {
                      const value = e.target.value;
                      setFormValues({ ...formValues, satelliteId: value });
                    }}
                  >
                    {satellites?.map(satellite => (
                      <option key={satellite?.id} value={satellite?.id}>
                        {satellite?.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                className="form-create-button"
                type="submit"
                disabled={!!formErrors.content && !!formErrors.title}
              >
                Create Report
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

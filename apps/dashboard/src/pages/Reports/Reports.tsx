import { useGetAllReportsQuery } from "@/generated/graphql";
import "./Reports.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateReportForm } from "./CreateNewReportForm";

export const Reports = () => {
  const { data, loading, error } = useGetAllReportsQuery();
  const [createFormOpen, setCreateFormOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  if (!data?.allReports) {
    return null;
  }

  return (
    <div>
      {createFormOpen ? (
        <CreateReportForm setModalClose={setCreateFormOpen} />
      ) : (
        <>
          <span>Reports</span>
          <button
            className="create-report"
            onClick={() => {
              setCreateFormOpen(true);
            }}
          >
            Create Report +
          </button>
          <div className="report-grid">
            {data.allReports.map(report => {
              const commentsLength = report?.Comments?.length ?? 0;

              const date = new Date("2024-03-10T00:00:00.000Z");

              const formattedDate = new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(date);

              return (
                <div
                  key={report?.id}
                  className="report-card"
                  onClick={() => {
                    navigate(`/reports/${report?.id}`);
                  }}
                >
                  <p>{report?.title}</p>
                  <div>
                    <label>Satellite</label>
                    <p>{report?.Satellite?.name ?? "Unknown"}</p>
                  </div>
                  <p>
                    {commentsLength}{" "}
                    {commentsLength === 1 ? "comment" : "comments"}
                  </p>
                  <div>
                    <label>Date</label>
                    <p>{formattedDate}</p>
                  </div>
                  <span
                    className={`status-badge ${report?.type?.toLowerCase()}`}
                  >
                    {report?.type}
                  </span>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

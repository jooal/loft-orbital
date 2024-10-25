import { useGetAllReportsQuery } from "@/generated/graphql";
import "./Reports.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateReportForm } from "./CreateNewReportForm";
import { readableDate } from "@/utils";
import { Card } from "@/components/Card/Card";

export const Reports = () => {
  const { data, loading, error } = useGetAllReportsQuery();
  const [createFormOpen, setCreateFormOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  if (!data?.allReports) {
    return null;
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="loading">Error fetching data</div>;
  }

  return (
    <div>
      {createFormOpen ? (
        <CreateReportForm setFormOpen={setCreateFormOpen} />
      ) : (
        <>
          <div className="top-header">
            <span>Reports</span>
            <button
              className="create-report"
              onClick={() => {
                setCreateFormOpen(true);
              }}
            >
              Create Report +
            </button>
          </div>
          <div className="report-grid">
            {data.allReports.map(report => {
              const commentsLength = report?.Comments?.length ?? 0;

              return (
                <Card
                  onClick={() => {
                    navigate(`/reports/${report?.id}`);
                  }}
                  content={
                    <div key={report?.id} className="padded-card">
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
                        <p>{readableDate(report?.date)}</p>
                      </div>
                      <span
                        className={`badge badge-${report?.type?.toLowerCase()}`}
                      >
                        {report?.type}
                      </span>
                    </div>
                  }
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

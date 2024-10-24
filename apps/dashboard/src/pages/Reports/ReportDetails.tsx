import { useGetReportDetailsQuery } from "@/generated/graphql";
import { useNavigate, useParams } from "react-router-dom";

export const ReportDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, loading, error } = useGetReportDetailsQuery({
    variables: { id: id ?? "" },
  });

  if (loading) {
    return <div>Loading report details...</div>;
  }

  if (!id || !data?.allReports) {
    return null;
  }

  const report = data.allReports[0];

  if (error || !id || !data?.allReports) {
    return <div>Error loading report data.</div>;
  }

  return (
    <div>
      <div>
        <span className="breadcrumb-link" onClick={() => navigate("/reports")}>
          Reports
        </span>{" "}
        / {report?.Satellite?.name ?? "Unknown"} / {report?.title}
      </div>

      <div>
        <div className="report-details-header">
          <h2>{report?.title}</h2>
          <span className={`badge badge-${report?.type?.toLowerCase()}`}>
            {report?.type}
          </span>
        </div>
      </div>
    </div>
  );
};

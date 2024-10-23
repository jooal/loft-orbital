import { useGetReportDetailsQuery } from "@/generated/graphql";
import { useNavigate, useParams } from "react-router-dom";

export const ReportDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, loading, error } = useGetReportDetailsQuery({
    variables: { id: id ?? "" },
  });

  if (!id || !data?.allReports) {
    return null;
  }

  const report = data.allReports[0];

  return (
    <div>
      {id ? (
        <span>
          <span
            className="breadcrumb-link"
            onClick={() => {
              navigate("/reports");
            }}
          >
            Reports
          </span>{" "}
          / {report?.Satellite?.name} / {report?.title}
        </span>
      ) : (
        <span>Dashboard</span>
      )}
    </div>
  );
};

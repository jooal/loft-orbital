import {
  GetAllReportsDocument,
  useCreateCommentMutation,
  useDeleteReportMutation,
  useGetAllEmployeesQuery,
  useGetReportDetailsQuery,
} from "@/generated/graphql";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Reports.css";
import { readableDate } from "@/utils";
import { CreateReportForm } from "./CreateNewReportForm";

interface DeleteModalProps {
  setShowDeleteModal: (arg: boolean) => void;
  handleDelete: () => Promise<void>;
}

const DeleteModal = ({
  setShowDeleteModal,
  handleDelete,
}: DeleteModalProps) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <h3>Confirm Deletion</h3>
        <p>Are you sure you want to delete this report?</p>
        <div className="modal-actions">
          <button onClick={() => setShowDeleteModal(false)}>Cancel</button>
          <button className="delete-button" onClick={handleDelete}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export const ReportDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [commentContent, setCommentContent] = useState<string>("");
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [editFormOpen, setEditFormOpen] = useState<boolean>(false);
  const [deleteReport] = useDeleteReportMutation({
    onCompleted: () => {
      setShowDeleteModal(false);
      navigate("/reports");
    },
    refetchQueries: [{ query: GetAllReportsDocument }],
  });

  const { data, loading, error } = useGetReportDetailsQuery({
    variables: { id: id ?? "" },
  });

  const {
    data: employeeData,
    loading: employeeLoading,
    error: employeeError,
  } = useGetAllEmployeesQuery();

  // Fake a logged in employee id
  const loggedInEmployeeId = employeeData?.allEmployees
    ? employeeData.allEmployees[
        Math.floor(Math.random() * employeeData.allEmployees.length)
      ]?.id
    : null;

  const [createComment] = useCreateCommentMutation({
    refetchQueries: "active",
    onCompleted: () => {
      setCommentContent("");
    },
  });

  const handleSubmit = async () => {
    try {
      await createComment({
        variables: {
          content: commentContent,
          report_id: id ?? "",
          employee_id: loggedInEmployeeId ?? "",
          date: new Date(),
        },
      });
    } catch (e) {
      console.error("Could not create comment", e);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteReport({
        variables: { id: id ?? "" },
      });
    } catch (e) {
      console.error("delete report error", e);
    }
  };

  if (loading || employeeLoading) {
    return <div className="loading">Loading report details...</div>;
  }

  if (error || employeeError || !id || !data?.allReports) {
    return (
      <div className="loading">
        <div className="error">
          Error loading report data.
          <button
            onClick={() => {
              navigate("/reports");
            }}
          >
            Back
          </button>
        </div>
      </div>
    );
  }
  const report = data.allReports[0];
  const reportCommentsLength = report?.Comments && report.Comments.length > 0;

  return (
    <div>
      {showDeleteModal && (
        <DeleteModal
          handleDelete={handleDelete}
          setShowDeleteModal={setShowDeleteModal}
        />
      )}

      {editFormOpen ? (
        <CreateReportForm
          mode="Edit"
          setFormOpen={setEditFormOpen}
          initialValues={{
            id: report!.id,
            title: report?.title || "",
            type: report!.type,
            date: new Date(report!.date),
            content: report!.content,
            satelliteId: report?.satellite_id ?? "",
            employeeId: report!.employee_id,
            groundStationId: report?.GroundStation?.id ?? "",
          }}
        />
      ) : (
        <>
          <div>
            <span
              className="breadcrumb-link"
              onClick={() => navigate("/reports")}
            >
              Reports
            </span>{" "}
            / {report?.Satellite?.name ?? "Unknown"} / {report?.title}
          </div>

          <div>
            <div className="report-details-header">
              <div className="flex">
                <h2>{report?.title}</h2>
                <span className={`badge badge-${report?.type?.toLowerCase()}`}>
                  {report?.type}
                </span>
                <p>
                  Created on {readableDate(report?.date)} by{" "}
                  {report?.Employee?.name}
                </p>
              </div>
              <div className="flex">
                <button
                  onClick={() => {
                    setEditFormOpen(true);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    setShowDeleteModal(true);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="report-details-card-grid">
              <img
                src={report?.Satellite?.image}
                alt={`${report?.Satellite?.name ?? "Unknown"}`}
                className="report-satellite-image"
              />
              <div className="column-grid">
                <div className="column">
                  <label>Satellite</label>
                  <p>{report?.Satellite?.name ?? "Unknown "}</p>

                  <label>Status</label>
                  <p>{report?.Satellite?.status ?? "Unknown "}</p>

                  <label>GroundStation Name</label>
                  <p>{report?.GroundStation?.name ?? "Unknown "}</p>

                  <label>GroundStation Network</label>
                  <p>{report?.GroundStation?.network ?? "Unknown"}</p>

                  <label>GroundStation Status</label>
                  <p>{report?.GroundStation?.status ?? "Unknown"}</p>

                  <label>GroundStation Coordinates</label>
                  <p>{report?.GroundStation?.coordinates ?? "Unknown"}</p>
                </div>
                <div>
                  <p>
                    {report?.GroundStation?.Contacts?.map(c => (
                      <div key={c?.id} className="column">
                        <label>GroundStation Type</label>
                        <p>{c?.type ?? "Unknown"}</p>

                        <label>GroundStation Date</label>
                        <p>{readableDate(c?.date) ?? "Unknown"}</p>

                        <label>Execution Script</label>
                        <p>{c?.executionScript ?? "Unknown"}</p>
                      </div>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3>Details</h3>
              <p>{report?.content}</p>
            </div>
            {reportCommentsLength ? (
              <div className="report-comments">
                <div className="comments-container">
                  {report?.Comments?.map(c => (
                    <div key={c?.id} className="comments-section">
                      <div className="comment-date">
                        <p>{c?.Employee?.name}</p>
                        <p>{readableDate(c?.date)}</p>
                      </div>
                      <p className="comment-content">{c?.content}</p>
                    </div>
                  ))}
                </div>
                <textarea
                  value={commentContent}
                  className="comment-textarea"
                  onChange={e => {
                    const value = e.target.value.trim();
                    setCommentContent(value);
                  }}
                />
                <button
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Comment
                </button>
              </div>
            ) : (
              <div className="empty-comments-container">
                <p>Add a comment</p>
                <textarea
                  value={commentContent}
                  className="comment-textarea"
                  onChange={e => {
                    const value = e.target.value.trim();
                    setCommentContent(value);
                  }}
                />
                <button
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Comment
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { CreateReportForm } from "./CreateNewReportForm";
import {
  useCreateReportMutation,
  useGetCreateReportFormDataQuery,
  useUpdateReportMutation,
} from "@/generated/graphql";
import { Mock } from "jest-mock";
import "@testing-library/jest-dom";

// mock graphql queries
vi.mock("@/generated/graphql", () => ({
  useGetCreateReportFormDataQuery: vi.fn(),
  useCreateReportMutation: vi.fn(),
  useUpdateReportMutation: vi.fn(),
}));

describe("CreateReportForm", () => {
  it("renders form", async () => {
    (useGetCreateReportFormDataQuery as jest.Mock).mockReturnValue({
      data: {
        allSatellites: [{ id: "1", name: "Satellite 1" }],
        allGroundStations: [{ id: "1", name: "Ground Station 1" }],
        allEmployees: [{ id: "1", name: "Employee 1" }],
      },
      loading: false,
      error: undefined,
    });

    const mockCreatingReport = vi.fn().mockResolvedValue({});
    (useCreateReportMutation as jest.Mock).mockReturnValue([
      mockCreatingReport,
    ]);

    const setFormOpenMock = vi.fn();

    render(<CreateReportForm setFormOpen={setFormOpenMock} mode="Create" />);
    //check content
    expect(screen.getByLabelText("Report Title")).toBeInTheDocument();
    expect(screen.getByLabelText("Ground Station")).toBeInTheDocument();
    expect(screen.getByLabelText("Employee")).toBeInTheDocument();
    expect(screen.getByLabelText("Report Details")).toBeInTheDocument();
    expect(screen.getByLabelText("Date of event")).toBeInTheDocument();
    expect(screen.getByLabelText("Incident Type")).toBeInTheDocument();
    expect(screen.getByLabelText("Satellite")).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Report Title"), {
      target: { value: "Test title" },
    });

    fireEvent.change(screen.getByLabelText("Ground Station"), {
      target: { value: "1" },
    });

    fireEvent.change(screen.getByLabelText("Employee"), {
      target: { value: "1" },
    });

    fireEvent.change(screen.getByLabelText("Report Details"), {
      target: { value: "Test content" },
    });

    fireEvent.submit(screen.getByRole("button", { name: "Create Report" }));

    await waitFor(() => {
      expect(mockCreatingReport).toHaveBeenCalledWith({
        variables: {
          title: "Test title",
          type: "Maintenance",
          date: expect.any(Date),
          content: "Test content",
          satellite_id: "1",
          employee_id: "1",
          groundStation_id: "1",
        },
      });
    });
  });

  it("check validation", async () => {
    (useGetCreateReportFormDataQuery as jest.Mock).mockReturnValue({
      data: {
        allSatellites: [{ id: "1", name: "Satellite 1" }],
        allGroundStations: [{ id: "1", name: "Ground Station 1" }],
        allEmployees: [{ id: "1", name: "Employee 1" }],
      },
      loading: false,
      error: undefined,
    });

    const setFormOpenMock = vi.fn();

    render(<CreateReportForm setFormOpen={setFormOpenMock} mode="Create" />);

    const submitButton = screen.getByRole("button", { name: "Create Report" });
    expect(submitButton).toBeDisabled();

    fireEvent.change(screen.getByLabelText("Report Title"), {
      target: { value: " " },
    });

    expect(screen.getByText("Title is required")).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Report Details"), {
      target: { value: " " },
    });

    expect(screen.getByText("Report details are required")).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Report Title"), {
      target: { value: "Test title" },
    });

    fireEvent.change(screen.getByLabelText("Report Details"), {
      target: { value: "Test content" },
    });

    expect(submitButton).toBeEnabled();
  });

  it("calls updateReportMutation", async () => {
    (useGetCreateReportFormDataQuery as jest.Mock).mockReturnValue({
      data: {
        allSatellites: [{ id: "1", name: "Satellite 1" }],
        allGroundStations: [{ id: "1", name: "Ground Station 1" }],
        allEmployees: [{ id: "1", name: "Employee 1" }],
      },
      loading: false,
      error: undefined,
    });

    const mockUpdateReport = vi.fn().mockResolvedValue({});
    (useUpdateReportMutation as jest.Mock).mockReturnValue([mockUpdateReport]);

    const setFormOpenMock = vi.fn();

    const initialValues = {
      id: "1",
      title: "Test title",
      type: "Incident",
      date: new Date(),
      content: "Test content",
      satelliteId: "1",
      employeeId: "1",
      groundStationId: "1",
    };

    render(
      <CreateReportForm
        setFormOpen={setFormOpenMock}
        mode="Edit"
        initialValues={initialValues}
      />
    );

    expect(screen.getByLabelText("Report Title")).toHaveValue("Test title");
    expect(screen.getByLabelText("Report Details")).toHaveValue("Test content");

    fireEvent.change(screen.getByLabelText("Report Title"), {
      target: { value: "Updated title" },
    });

    fireEvent.submit(screen.getByRole("button", { name: "Update Report" }));

    await waitFor(() => {
      expect(mockUpdateReport).toHaveBeenCalledWith({
        variables: {
          id: "1",
          title: "Updated title",
          type: "Incident",
          date: expect.any(Date),
          content: "Test content",
          satellite_id: "1",
          employee_id: "1",
          groundStation_id: "1",
        },
      });
    });
  });
});

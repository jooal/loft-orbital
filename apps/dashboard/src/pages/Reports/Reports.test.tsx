import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Reports } from "./Reports";
import { useGetAllReportsQuery } from "@/generated/graphql";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

vi.mock("@/generated/graphql", () => ({
  useGetAllReportsQuery: vi.fn(),
}));

describe("Reports", () => {
  it("renders reports data", async () => {
    (useGetAllReportsQuery as jest.Mock).mockReturnValue({
      data: {
        allReports: [
          {
            id: "1",
            title: "Report A",
            date: new Date().toISOString(),
            type: "Incident",
            Satellite: { name: "Satellite A" },
            Comments: [{ id: "c1" }],
          },
          {
            id: "2",
            title: "Report B",
            date: new Date().toISOString(),
            type: "Maintenance",
            Satellite: { name: "Satellite B" },
            Comments: [],
          },
        ],
      },
      loading: false,
      error: undefined,
    });

    render(
      <BrowserRouter>
        <Reports />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Report A")).toBeInTheDocument();
      expect(screen.getByText("Satellite A")).toBeInTheDocument();
      expect(screen.getByText("1 comment")).toBeInTheDocument();

      expect(screen.getByText("Report B")).toBeInTheDocument();
      expect(screen.getByText("Satellite B")).toBeInTheDocument();
      expect(screen.getByText("0 comments")).toBeInTheDocument();
    });
  });
});

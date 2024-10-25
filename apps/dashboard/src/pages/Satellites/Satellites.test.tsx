import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Satellites } from "./Satellites";
import {
  useGetSatellitesQuery,
  useGetFilteredSatellitesQuery,
} from "@/generated/graphql";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

vi.mock("@/generated/graphql", () => ({
  useGetSatellitesQuery: vi.fn(),
  useGetFilteredSatellitesQuery: vi.fn(),
}));

describe("Satellites Component", () => {
  it("renders satellites data", async () => {
    (useGetSatellitesQuery as jest.Mock).mockReturnValue({
      data: {
        allSatellites: [
          {
            id: "1",
            name: "Satellite A",
            status: "In Orbit",
            description: "Test satellite A",
            Payloads: [{ id: "p1" }, { id: "p2" }],
          },
          {
            id: "2",
            name: "Satellite B",
            status: "Decommissioned",
            description: "Test satellite B",
            Payloads: [{ id: "p3" }],
          },
        ],
      },
      loading: false,
      error: undefined,
    });

    (useGetFilteredSatellitesQuery as jest.Mock).mockReturnValue({
      data: {},
      loading: false,
      error: undefined,
    });

    render(
      <BrowserRouter>
        <Satellites />
      </BrowserRouter>
    );

    await waitFor(() => {
      const satelliteA = screen.getByText("Satellite A").closest("tr");
      expect(satelliteA).toHaveTextContent("In Orbit");
      expect(satelliteA).toHaveTextContent("Test satellite A");
      expect(satelliteA).toHaveTextContent("2");

      const satelliteB = screen.getByText("Satellite B").closest("tr");
      expect(satelliteB).toHaveTextContent("Decommissioned");
      expect(satelliteB).toHaveTextContent("Test satellite B");
      expect(satelliteB).toHaveTextContent("1");
    });
  });
});

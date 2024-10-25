import {
  useGetFilteredSatellitesQuery,
  useGetSatellitesQuery,
} from "@/generated/graphql";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Satellites.css";
import { CreateSatelliteForm } from "./CreateSatelliteForm";

interface FilterProps {
  selectedStatus: string;
  setSelectedStatus: (val: string) => void;
}

const FilterButton = ({ setSelectedStatus, selectedStatus }: FilterProps) => {
  return (
    <div className="flex">
      <p>Filter:</p>
      <button
        onClick={() => {
          setSelectedStatus("In Orbit");
        }}
        className={`filter ${selectedStatus === "In Orbit" ? "active" : ""}`}
      >
        In Orbit
      </button>
      <button
        onClick={() => {
          setSelectedStatus("Decommissioned");
        }}
        className={`filter ${
          selectedStatus === "Decommissioned" ? "active" : ""
        }`}
      >
        Decommissioned
      </button>
      <button
        onClick={() => {
          setSelectedStatus("Planned");
        }}
        className={`filter ${selectedStatus === "Planned" ? "active" : ""}`}
      >
        Planned
      </button>
      <button
        onClick={() => {
          setSelectedStatus("");
        }}
        className="clear"
      >
        Clear
      </button>
    </div>
  );
};

export const Satellites = () => {
  const headers = ["Satellite Name", "Status", "Description", "# of Payloads"];
  const [page, setPage] = useState<number>(0);
  const [sortOrder, setSortOrder] = useState("ASC");
  const [selectedStatus, setSelectedStatus] = useState("");

  const [createFormOpen, setCreateFormOpen] = useState<boolean>(false);

  const { data, loading, error } = useGetSatellitesQuery({
    variables: {
      page,
      perPage: 10,
      sortField: "name",
      sortOrder,
    },
    fetchPolicy: "no-cache",
  });

  const { data: filteredData } = useGetFilteredSatellitesQuery({
    variables: {
      page,
      perPage: 10,
      sortField: "name",
      sortOrder,
      status: selectedStatus,
    },
    fetchPolicy: "no-cache",
  });

  const handleNextPage = (page: number) => {
    setPage(page);
  };

  const dataToUse = selectedStatus !== "" ? filteredData : data;

  const navigate = useNavigate();

  if (!data?.allSatellites) {
    return <div>No satellite data available.</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {createFormOpen ? (
        <CreateSatelliteForm setFormOpen={setCreateFormOpen} />
      ) : (
        <>
          <div className="top-header">
            <span>Satellites</span>
            <button
              className="create-report"
              onClick={() => {
                setCreateFormOpen(true);
              }}
            >
              Create Satellite +
            </button>
          </div>
          <div className="table-container">
            <div className="filters">
              <button
                onClick={() => {
                  if (sortOrder === "ASC") {
                    setSortOrder("DESC");
                  } else {
                    setSortOrder("ASC");
                  }
                }}
              >
                {sortOrder === "ASC" ? (
                  <p>DESC &#x25BC;</p>
                ) : (
                  <p>ASC &#x25B2;</p>
                )}
              </button>
              <FilterButton
                setSelectedStatus={setSelectedStatus}
                selectedStatus={selectedStatus}
              />
            </div>
            <table className="table">
              <thead>
                <tr>
                  {headers.map(header => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataToUse?.allSatellites?.map(satellite => (
                  <tr
                    key={satellite?.id}
                    onClick={() => {
                      navigate(`/satellites/${satellite?.id}`);
                    }}
                  >
                    <td>{satellite?.name}</td>
                    <td>{satellite?.status}</td>
                    <td>{satellite?.description}</td>
                    <td>{satellite?.Payloads?.length ?? 0}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="page-footer">
              <p>Page {page + 1}</p>

              <div className="button-div">
                <button
                  className="arrows"
                  onClick={() => handleNextPage(page - 1)}
                  disabled={page === 0}
                >
                  &#8592;
                </button>

                <button
                  disabled={data.allSatellites.length <= 10}
                  onClick={() => handleNextPage(page + 1)}
                  className="arrows"
                >
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

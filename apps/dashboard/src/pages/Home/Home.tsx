import { useGetSatellitesQuery } from "@/generated/graphql";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const headers = ["Satellite Name", "Status", "Description", "# of Payloads"];
  const [page, setPage] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(10);
  const [sortField, setSortField] = useState("status");
  const [sortOrder, setSortOrder] = useState("ASC");

  const { data, loading, error } = useGetSatellitesQuery({
    variables: {
      page,
      perPage,
      sortField,
      sortOrder,
    },
  });

  console.log(data);

  const handleNextPage = (page: number) => {
    setPage(page);
  };

  const [selectedSatellite, setSelectedSatellite] = useState({
    id: "",
    name: "",
  });

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

  const handleSelect = (id: string, name: string) => {
    setSelectedSatellite({ id, name });
  };

  return (
    <div>
      {" "}
      <>
        <span>Satellites</span>
        <button
          className="create-report"
          onClick={() => {
            // setCreateFormOpen(true);
          }}
        >
          Create Satellite +
        </button>
      </>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              {headers.map(header => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.allSatellites?.map(satellite => (
              <tr
                key={satellite?.id}
                onClick={() => {
                  handleSelect(satellite?.id ?? "", satellite?.name ?? "");
                  navigate(`/satellite/${satellite?.id}`);
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
    </div>
  );
};

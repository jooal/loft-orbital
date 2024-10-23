import { SatelliteTable } from "@/components/SatelliteTable/SatelliteTable";
import { useGetSatellitesQuery } from "@/generated/graphql";
import { useState } from "react";

export const HomePage = () => {
  const { data, loading, error } = useGetSatellitesQuery();
  const [selectedSatellite, setSelectedSatellite] = useState({
    id: "",
    name: "",
  });

  if (!data) {
    return <div>No satellite data available.</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const selectedData =
    data.allSatellites?.map(satellite => ({
      id: satellite?.id,
      name: satellite?.name,
      status: satellite?.status,
      description: satellite?.description,
      payloadCount: satellite?.Payloads ? satellite.Payloads.length : 0,
    })) ?? [];

  const handleSelect = (id: string, name: string) => {
    setSelectedSatellite({ id, name });
  };

  return (
    <div>
      <SatelliteTable data={selectedData} handleSelect={handleSelect} />
    </div>
  );
};

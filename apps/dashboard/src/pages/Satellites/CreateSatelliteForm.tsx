interface CreateSatelliteFormProps {
  setFormOpen: (arg: boolean) => void;
}

export const CreateSatelliteForm = ({
  setFormOpen,
}: CreateSatelliteFormProps) => {
  return (
    <div className="details-form">
      <h3>Create a new satellite</h3>
      <button
        className="close-button"
        onClick={() => {
          setFormOpen(false);
        }}
      >
        X
      </button>
    </div>
  );
};

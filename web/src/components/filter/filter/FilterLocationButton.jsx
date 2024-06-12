import './FilterButton.css';

const FilterLocationButton = ({
  locations,
  inputLocation,
  setInputLocation,
}) => {
  const handleChange = (e) => {
    setInputLocation(e.target.value);
  };

  return (
    <select
      value={inputLocation}
      onChange={handleChange}
      className="sport-filter"
    >
      <option value="">All Provinces</option>
      {locations.map((sport, index) => (
        <option key={index} value={sport}>
          {sport}
        </option>
      ))}
    </select>
  );
};

export default FilterLocationButton;

import './FilterButton.css';

const FilterSportButton = ({ sports, inputSport, setInputSport }) => {
  const handleChange = (e) => {
    setInputSport(e.target.value);
  };

  return (
    <select value={inputSport} onChange={handleChange} className="sport-filter">
      <option value="">All Sports</option>
      {sports.map((sport, index) => (
        <option key={index} value={sport}>
          {sport}
        </option>
      ))}
    </select>
  );
};

export default FilterSportButton;

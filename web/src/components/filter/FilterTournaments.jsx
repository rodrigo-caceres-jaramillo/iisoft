import { useContext, useEffect, useState } from 'react';
import { IoFilter } from 'react-icons/io5';
import SearchTournamentBox from './search/SearchTournamentBox';
import { AuthContext } from '../../api/AuthContext';
import './FilterTournament.css';
import FilterLocationButton from './filter/FilterLocationButton';
import FilterSportButton from './filter/FilterSportButton';

const FilterTournaments = ({ userId, setTournaments }) => {
  const [inputSport, setInputSport] = useState('');
  const [inputLocation, setInputLocation] = useState('');
  const [inputText, setInputText] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const { getUserTournamentsSearch, sports, locations, getTournamentsSearch } =
    useContext(AuthContext);

  const handleSubmit = () => {
    if (userId) {
      getUserTournamentsSearch(
        userId,
        inputSport,
        inputLocation,
        inputText,
        setTournaments,
      );
    } else {
      getTournamentsSearch(
        inputSport,
        inputLocation,
        inputText,
        setTournaments,
      );
    }
  };

  useEffect(() => {
    handleSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputSport, inputLocation]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="search-box">
      <SearchTournamentBox
        setInputText={setInputText}
        inputText={inputText}
        handleSubmit={handleSubmit}
      />
      <button className="filters-toggle" onClick={toggleFilters}>
        <IoFilter />
        FILTERS
      </button>
      {showFilters && (
        <div className="filters-section">
          <span>Filter Tournaments</span>
          <div className="filter-buttons">
            <FilterLocationButton
              locations={locations}
              inputLocation={inputLocation}
              setInputLocation={setInputLocation}
            />
            <FilterSportButton
              sports={sports}
              inputSport={inputSport}
              setInputSport={setInputSport}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterTournaments;

import { useContext, useEffect, useState } from 'react';
import TournamentList from '../components/tournament/list/TournamentList';
import FilterTournaments from '../components/filter/FilterTournaments';
import { AuthContext } from '../api/AuthContext';

const Search = () => {
  const [tournaments, setTournaments] = useState();
  const { getTournaments } = useContext(AuthContext);

  useEffect(() => {
    getTournaments(setTournaments);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="element main">
        <div className="header">
          <h3>SEARCH TOURNAMENT</h3>
          <div className="center">
            <FilterTournaments setTournaments={setTournaments} />
          </div>
        </div>
        {tournaments && <TournamentList tournaments={tournaments} />}
      </div>
    </>
  );
};

export default Search;

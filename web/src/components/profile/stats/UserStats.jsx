import { useMemo } from 'react';
import './UserStats.css';

const UserStats = ({ tournaments }) => {
  const publicTournamentsCount = useMemo(() => {
    return tournaments.filter((tournament) => tournament.privacy === 'Public')
      .length;
  }, [tournaments]);

  const mostOrganizedSport = useMemo(() => {
    const sportCounts = tournaments.reduce((acc, tournament) => {
      acc[tournament.sport] = (acc[tournament.sport] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(sportCounts).reduce(
      (a, b) => (b[1] > a[1] ? b : a),
      [null, 0],
    )[0];
  }, [tournaments]);

  return (
    <div className="user-stats">
      <h2>STATS</h2>
      <p>
        Public Tournaments:{' '}
        <span className="highlight">{publicTournamentsCount}</span>
      </p>
      <p>
        Most Organized Sport:{' '}
        <span className="highlight">{mostOrganizedSport}</span>
      </p>
    </div>
  );
};

export default UserStats;

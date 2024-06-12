import './TournamentList.css';
import SimpleTournament from './simple/SimpleTournament';

const TournamentList = ({ tournaments }) => {
  return (
    <div id="tournament-list">
      <div className="grid">
        {tournaments.map((tournament, index) => (
          <SimpleTournament tournament={tournament} key={index} />
        ))}{' '}
      </div>
      {tournaments.length == 0 && (
        <div className="not-found">No Tournament Found</div>
      )}
    </div>
  );
};

export default TournamentList;

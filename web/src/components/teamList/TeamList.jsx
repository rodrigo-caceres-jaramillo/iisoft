import TeamScore from './score/TeamScore';
import './TeamList.css';

const TeamList = ({ teams, status }) => {
  return (
    <div className="team-list-container">
      <table className="team-list">
        <thead>
          <th>NAME</th>
          <th>POINTS</th>
          <th>WINS</th>
          <th>LOSSES</th>
          <th>DRAWS</th>
          <th>FAVOR</th>
          <th>AGAINST</th>
          <th>DIFFERENCE</th>
        </thead>
        <tbody>
          {teams &&
            teams.length > 0 &&
            teams.map((team, index) => (
              <TeamScore
                key={team.name}
                team={team}
                highlightFirstRow={status === 'Close' && index === 0}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamList;

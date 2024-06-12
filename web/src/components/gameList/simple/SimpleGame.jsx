import EditGameButton from './editButton/EditGameButton';
import './SimpleGame.css';

const SimpleGame = ({
  tournamentId,
  game,
  teams,
  setTournament,
  tournamentStatus,
  userInfo,
  tournamentUserId,
}) => {
  return (
    <div className="simple-game">
      <div className="game">
        <div className="team">
          <span className="team-name">{game.team1}</span>
          <div className="score-box">{game.score1}</div>
        </div>
        <div className="team">
          <div className="score-box">{game.score2}</div>
          <span className="team-name">{game.team2}</span>
        </div>
      </div>
      {userInfo.logged &&
        tournamentUserId == userInfo.id &&
        tournamentStatus === 'Open' && (
          <EditGameButton
            tournamentId={tournamentId}
            game={game}
            teams={teams}
            setTournament={setTournament}
          />
        )}
    </div>
  );
};

export default SimpleGame;

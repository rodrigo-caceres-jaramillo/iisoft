import { useState, useContext } from 'react';
import { AuthContext } from '../../../api/AuthContext';
import './GameForm.css';

const GameForm = ({ tournamentId, teams, close, setTournament }) => {
  const [team1, setTeam1] = useState('');
  const [score1, setScore1] = useState(0);
  const [team2, setTeam2] = useState('');
  const [score2, setScore2] = useState(0);
  const [success, setSuccess] = useState(false);
  const { setError, postGame } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!team1 || !team2) {
      setError('Please select 2 teams.');
      return;
    }
    if (team1 == team2) {
      setError('Please select 2 different teams.');
      return;
    }
    const goals1Int = parseInt(score1);
    const goals2Int = parseInt(score2);
    if (goals1Int < 0 || goals2Int < 0) {
      setError('Plese add a valid score.');
      return;
    }
    const goals1String = score1.toString();
    const goals2String = score2.toString();

    if (goals1String.includes(',') || goals2String.includes(',')) {
      setError('Please enter integer values for goals.');
      return;
    }
    postGame(
      tournamentId,
      team1,
      score1,
      team2,
      score2,
      setTournament,
      setSuccess,
    );
    close();
  };

  return (
    <div className="game-form">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="group">
            <div>TEAM 1</div>
            <select value={team1} onChange={(e) => setTeam1(e.target.value)}>
              <option value="">Select Team</option>
              {teams.map((team) => (
                <option key={team.name} value={team.name}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>
          <div className="group">
            <div>GOALS</div>
            <input
              className="numberInput"
              type="number"
              value={score1}
              onChange={(e) => setScore1(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="group">
            <div>TEAM 2</div>
            <select value={team2} onChange={(e) => setTeam2(e.target.value)}>
              <option value="">Select Team</option>
              {teams.map((team) => (
                <option key={team.name} value={team.name}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>
          <div className="group">
            <div>GOALS</div>
            <input
              className="numberInput"
              type="number"
              value={score2}
              onChange={(e) => setScore2(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default GameForm;

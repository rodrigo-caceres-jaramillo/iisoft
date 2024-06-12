import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../api/AuthContext';
import TeamList from '../../components/teamList/TeamList';
import TournamentInfo from '../../components/tournament/info/TournamentInfo';
import TournamentPanel from '../../components/tournament/panel/TournamentPanel';
import './Tournament.css';

const Tournament = () => {
  const { tournamentId } = useParams();
  const [tournament, setTournament] = useState(null);
  const [success, setSuccess] = useState(false);
  const { getTournament } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      tournamentId &&
        (await getTournament(tournamentId, setTournament, setSuccess));
    };
    fetchData();
    if (success) {
      document.title = tournament.name;
    }
  }, [tournamentId, getTournament]);

  if (!tournament) {
    return <p>Loading...</p>;
  }

  return (
    <div id="tournament" className="element main">
      <div className="izq">
        <TournamentInfo
          tournamentId={tournamentId}
          tournament={tournament}
          setTournament={setTournament}
        />
        <TournamentPanel
          tournamentId={tournamentId}
          tournament={tournament}
          setTournament={setTournament}
        />
      </div>
      <div className="der">
        <TeamList teams={tournament.teams} status={tournament.status} />
      </div>
    </div>
  );
};

export default Tournament;

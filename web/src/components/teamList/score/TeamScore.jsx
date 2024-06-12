import './TeamScore.css';

const TeamScore = ({ team, highlightFirstRow }) => {
  return (
    <tr className={highlightFirstRow ? 'highlighted-row' : ''}>
      <td>{team.name}</td>
      <td>{team.wins * 2 + team.draws}</td>
      <td>{team.wins}</td>
      <td>{team.losses}</td>
      <td>{team.draws}</td>
      <td>{team.favour}</td>
      <td>{team.against} </td>
      <td>{team.favour - team.against}</td>
    </tr>
  );
};

export default TeamScore;

import TournamentList from '../tournament/list/TournamentList';
import './UserProfile.css';
import UserInfo from './info/UserInfo';
import UserStats from './stats/UserStats';

const UserProfile = ({ user }) => {
  return (
    <div id="user-profile" className="element main">
      <div className="section">
        <UserInfo user={user} />
      </div>
      <div className="section">
        <UserStats tournaments={user.tournaments} />
      </div>
      <div className="section">
        <h2>TOURNAMENTS</h2>
        <TournamentList tournaments={user.tournaments} />
      </div>
    </div>
  );
};

export default UserProfile;

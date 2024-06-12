import { MdOutlineEmail, MdOutlineLocalPhone } from 'react-icons/md';
import './UserInfo.css';
const UserInfo = ({ user }) => {
  return (
    <div className="user-info">
      <div className="image-container">
        <img src={user.imageURL} />
      </div>
      <div className="info">
        <div className="username">{user.username}</div>
        <div className="sector">
          Province:<span>{user.location}</span>
        </div>
        <div className="sector">
          Prefered Sport:<span>{user.preferredSport}</span>
        </div>
      </div>
      <div className="contacts">
        <div className="section-title">CONTACTS</div>
        <div className="sector">
          <MdOutlineEmail />
          <span>{user.email}</span>
        </div>
        <div className="sector">
          <MdOutlineLocalPhone />
          <span>{user.phone}</span>
        </div>
      </div>
    </div>
  );
};

// user.imageURL

export default UserInfo;

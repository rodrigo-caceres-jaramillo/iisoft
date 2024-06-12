import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../api/AuthContext';
import './Menu.css';

const Menu = () => {
  const { userInfo, logOut } = useContext(AuthContext);

  return (
    <header id="main-menu">
      <NavLink to="/">
        <div className="left">
          <img src="https://cdn-icons-png.freepik.com/512/7953/7953066.png"></img>
          <div className="name">WHISTLE</div>
        </div>
      </NavLink>
      <div className="center">
        <NavLink to="/">
          <span className="first">HOME</span>
        </NavLink>
        <NavLink to="/search">
          <span>SEARCH</span>
        </NavLink>
        {userInfo.logged && (
          <>
            <NavLink to="/tournaments">
              <span>MY TOURNAMENTS</span>
            </NavLink>
            <NavLink to="/profile">
              <span>PROFILE</span>
            </NavLink>
          </>
        )}
      </div>
      <div className="right">
        {userInfo.logged ? (
          <a onClick={() => logOut()}>
            <span>LOG OUT</span>
          </a>
        ) : (
          <NavLink to="/login">
            <span>LOG IN</span>
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Menu;

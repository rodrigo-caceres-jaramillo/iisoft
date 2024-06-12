import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './routes/Login';
import Register from './routes/Register';
import Tournaments from './routes/Tournaments';
import Tournament from './routes/tournament/Tournament';
import { Private } from './routes/Private';
import NotFound from './routes/NotFound';
import TitleManager from './components/titleManager/TitleManager';
import Menu from './components/menu/Menu';
import Search from './routes/Search';
import Home from './routes/Home';
import Profile from './routes/Profile';
import UserProfile from './routes/user/Profile';

function App() {
  return (
    <BrowserRouter>
      <TitleManager />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/tournaments"
          element={
            <Private>
              <Tournaments />
            </Private>
          }
        />
        <Route
          path="/tournament/:tournamentId"
          element={
            <Private>
              <Tournament />
            </Private>
          }
        />
        <Route
          path="/profile"
          element={
            <Private>
              <Profile />
            </Private>
          }
        />
        <Route
            path="/profile/:userId"
            element={
                <Private>
                    <UserProfile />
                </Private>
            }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

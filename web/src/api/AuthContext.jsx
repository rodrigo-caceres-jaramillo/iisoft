import { createContext, useEffect, useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ logged: false });
  const sports = ['Football', 'Volleyball', 'Handball'];
  const locations = [
    'Buenos Aires',
    'Capital Federal',
    'Catamarca',
    'Chaco',
    'Chubut',
    'Córdoba',
    'Corrientes',
    'Entre Ríos',
    'Formosa',
    'Jujuy',
    'La Pampa',
    'La Rioja',
    'Mendoza',
    'Misiones',
    'Neuquen',
    'Río Negro',
    'Salta',
    'San Juan',
    'San Luís',
    'Santa Cruz',
    'Santa Fe',
    'Santiago Del Estero',
    'Tierra Del Fuego',
    'Tucumán',
  ];
  const [userLoad, setUserLoad] = useState(false);
  const [error, setError] = useState();
  const url = 'http://localhost:8001';

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common.Authorization = `${token}`;
      getCurrentUser();
    }
  }, []);

  const errorHandler = () => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      axios.defaults.headers.common.Authorization = '';
      setUserInfo({
        logged: false,
      });
      setUserLoad(false);
      toast.error('Unauthorized', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
      window.location.href = '/login';
    }
    if (error.response) {
      toast.error(error.response.data.error, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
    }
    toast.error(error, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });
  };

  const postLogin = (email, password, navigate) => {
    setUserLoad(false);
    setError();
    axios
      .post(url + '/login', { email, password })
      .then((response) => {
        const token = response.headers.authorization;
        axios.defaults.headers.common.Authorization = `${token}`;
        localStorage.setItem('token', token);
        const data = response.data;
        setUserInfo({
          logged: true,
          id: data.id,
          name: data.name,
        });
        setUserLoad(true);
      })
      .catch((error) => setError(error))
      .finally(() => navigate('/tournaments'));
  };

  const logOut = async () => {
    localStorage.removeItem('token');
    axios.defaults.headers.common.Authorization = '';
    setUserInfo({
      logged: false,
    });
    setUserLoad(false);
    window.location.href = '/login';
  };

  const postRegister = (
    email,
    preferredSport,
    location,
    phone,
    password,
    username,
    imageURL,
    navigate,
  ) => {
    setError();

    axios
      .post(url + '/register', {
        email,
        preferredSport,
        location,
        phone,
        password,
        username,
        imageURL,
      })
      .then((response) => {
        const token = response.headers.authorization;
        axios.defaults.headers.common.Authorization = `${token}`;
        localStorage.setItem('token', token);
        const data = response.data;
        setUserInfo({
          logged: true,
          id: data.id,
          name: data.name,
        });
        setUserLoad(true);
        if (!imageURL || imageURL === '') {
          imageURL =
            'https://ohsobserver.com/wp-content/uploads/2022/12/Guest-user.png';
        }
      })
      .catch((error) => setError(error))
      .finally(() => navigate('/tournaments'));
  };

  const getCurrentUser = () => {
    setUserLoad(false);
    setError();
    axios
      .get(url + '/user/current')
      .then((response) => {
        const data = response.data;
        setUserInfo({
          logged: true,
          id: data.id,
          name: data.name,
        });
      })
      .catch((error) => setError(error))
      .finally(() => setUserLoad(true));
  };

  const getUser = (id, setUser) => {
    setError();
    axios
      .get(url + `/user/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => setError(error));
  };

  const postTornament = (
    name,
    description,
    date,
    teams,
    sport,
    imageURL,
    location,
    privacy,
    navigate,
  ) => {
    var tournament;
    setError();
    if (!imageURL || imageURL === '') {
      imageURL =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGME2VivHFEZWJDwVWGUfxtjSGg78t58nNkx4Y3eBQUw&s';
    }
    axios
      .post(url + '/tournament', {
        name,
        description,
        date,
        teams,
        sport,
        imageURL,
        location,
        privacy,
      })
      .then((response) => {
        tournament = response.data;
      })
      .catch((error) => setError(error))
      .finally(() => navigate(`/tournament/${tournament.id}`));
  };

  const putTornament = (
    name,
    description,
    date,
    teams,
    sport,
    imageURL,
    location,
    privacy,
    tournamentId,
    setTournament,
  ) => {
    var tournament;
    setError();
    if (!imageURL || imageURL === '') {
      imageURL =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGME2VivHFEZWJDwVWGUfxtjSGg78t58nNkx4Y3eBQUw&s';
    }
    axios
      .put(url + `/tournament/${tournamentId}`, {
        name,
        description,
        date,
        teams,
        sport,
        imageURL,
        location,
        privacy,
      })
      .then((response) => {
        tournament = response.data;
      })
      .catch((error) => setError(error))
      .finally(() => setTournament(tournament));
  };

  const getTournament = (id, setTournament, setSucces) => {
    setSucces(false);
    setError();
    axios
      .get(url + `/tournament/${id}`)
      .then((response) => {
        setTournament(response.data);
      })
      .catch((error) => setError(error))
      .finally(() => setSucces(true));
  };

  const postGame = (
    tournamentId,
    team1,
    score1,
    team2,
    score2,
    setTournament,
    setSuccess,
  ) => {
    setSuccess(false);
    setError();
    axios
      .post(url + `/tournament/${tournamentId}/games`, {
        team1,
        score1,
        team2,
        score2,
      })
      .then((response) => {
        setTournament(response.data);
      })
      .catch((error) => setError(error))
      .finally(() => setSuccess(true));
  };

  const editGame = (
    tournamentId,
    gameId,
    team1,
    score1,
    team2,
    score2,
    setTournament,
    setSuccess,
  ) => {
    setSuccess(false);
    setError();
    axios
      .put(url + `/tournament/${tournamentId}/games/${gameId}`, {
        team1,
        score1,
        team2,
        score2,
      })
      .then((response) => {
        setTournament(response.data);
      })
      .catch((error) => setError(error))
      .finally(() => setSuccess(true));
  };

  const closeTournament = (tournamentId, setTournament) => {
    setError();
    axios
      .post(url + `/tournament/${tournamentId}/status`)
      .then((response) => {
        setTournament(response.data);
      })
      .catch((error) => setError(error));
  };

  const getUserTournamentsSearch = (
    userId,
    sport,
    location,
    name,
    setTournaments,
  ) => {
    setError();
    axios
      .get(
        url +
          `/user/${userId}/tournaments/search?sport=${sport}&location=${location}&name=${name}`,
      )
      .then((response) => {
        setTournaments(response.data);
      })
      .catch((error) => setError(error));
  };

  const getTournamentsSearch = (sport, location, name, setTournaments) => {
    setError();
    axios
      .get(
        url +
          `/tournament/search?sport=${sport}&location=${location}&name=${name}`,
      )
      .then((response) => {
        setTournaments(response.data);
      })
      .catch((error) => setError(error));
  };

  const DeleteTournament = (tournamentId, navigate) => {
    setError();
    console.log(tournamentId);
    axios
      .delete(url + `/tournament/${tournamentId}`)
      .then(navigate('/tournaments'))
      .catch((error) => setError(error));
  };

  const getTournaments = (setTournament) => {
    setError();
    axios
      .get(url + `/tournament`)
      .then((response) => {
        setTournament(response.data);
      })
      .catch((error) => setError(error));
  };

  const getFeaturedTournaments = (setTournament) => {
    setError();
    axios
      .get(url + `/tournament/featured`)
      .then((response) => {
        setTournament(response.data);
      })
      .catch((error) => setError(error));
  };

  const getSportFeaturedTournaments = (setSport, setTournament) => {
    setError();
    var sport = sports[Math.floor(Math.random() * sports.length)];
    axios
      .get(url + `/tournament/featured/${sport}`)
      .then((response) => {
        setTournament(response.data);
        setSport(sport);
      })
      .catch((error) => setError(error));
  };

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        userLoad,
        sports,
        locations,
        postLogin,
        logOut,
        postRegister,
        setError,
        getUser,
        postTornament,
        putTornament,
        getTournament,
        postGame,
        editGame,
        getUserTournamentsSearch,
        closeTournament,
        DeleteTournament,
        getTournaments,
        getTournamentsSearch,
        getFeaturedTournaments,
        getSportFeaturedTournaments,
      }}
    >
      <ToastContainer />
      {error ? errorHandler() : null}
      {children}
    </AuthContext.Provider>
  );
};

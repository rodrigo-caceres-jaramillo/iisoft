import { useContext, useEffect, useState } from 'react';
import FeaturedTournaments from '../components/tournament/featured/FeaturedTournaments';
import { AuthContext } from '../api/AuthContext';

const Home = () => {
  const [featuredTournaments, setFeaturedTournaments] = useState();
  const [sport, setSport] = useState('');
  const [sportFeaturedTournaments, setSportFeaturedTournaments] = useState();
  const { getFeaturedTournaments, getSportFeaturedTournaments } =
    useContext(AuthContext);

  useEffect(() => {
    getFeaturedTournaments(setFeaturedTournaments);
    getSportFeaturedTournaments(setSport, setSportFeaturedTournaments);
    console.log(sport);
  }, []);

  return (
    <>
      {featuredTournaments && (
        <FeaturedTournaments
          name={'FEATURED TOURNAMENTS'}
          tournaments={featuredTournaments}
        />
      )}
      {sportFeaturedTournaments && sport && (
        <FeaturedTournaments
          name={sport}
          tournaments={sportFeaturedTournaments}
        />
      )}
    </>
  );
};

export default Home;

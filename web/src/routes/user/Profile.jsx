import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../api/AuthContext';
import UserProfile from '../../components/profile/UserProfile';
import {useParams} from "react-router-dom";

const USProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState();
  const [success, setSuccess] = useState(false);
  const { getUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      userId &&
      (await getUser(userId, setUser, setSuccess));
    };
    fetchData();
    if (success) {
      document.title = user.name;
    }
  }, [userId, getUser]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return <>{user && <UserProfile user={user} />}</>;
};

export default USProfile;

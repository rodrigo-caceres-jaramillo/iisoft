import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../api/AuthContext';
import UserProfile from '../components/profile/UserProfile';

const Profile = () => {
  const [user, setUser] = useState();
  const { getUser, userInfo, userLoad } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      if (!userLoad) {
        return;
      }
      await getUser(userInfo.id, setUser);
    };
    fetchData();
  }, [userLoad, getUser, userInfo]);

  return <>{user && <UserProfile user={user} />}</>;
};

export default Profile;

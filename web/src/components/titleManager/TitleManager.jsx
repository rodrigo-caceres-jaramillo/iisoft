import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TitleManager = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Whistle';
        break;
      case '/login':
        document.title = 'Login';
        break;
      case '/register':
        document.title = 'Register';
        break;
      case '/create':
        document.title = 'Create';
        break;
      case '/tournaments':
        document.title = 'Whistle';
        break;
      // case '/tournaments':  --> esta en Tournament
      default:
        document.title = 'Whistle';
    }
  }, [location.pathname]);

  return null;
};

export default TitleManager;

import { useContext, useState } from 'react';
import { AuthContext } from '../../../api/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';
import { FormButton, FormSubmitButton, SimpleInput } from '../Form';
import './UserForm.css';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { postLogin, setError } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!email || !password) {
      setError('Please fill out all fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    postLogin(email, password, navigate);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="user-form">
      <div className="element">
        <h3>SIGN IN</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <SimpleInput
              name={'Sign in with email *'}
              value={email}
              set={setEmail}
            />
          </div>
          <div>
            <SimpleInput
              type={'password'}
              name={'Password *'}
              value={password}
              set={setPassword}
            />
          </div>
          <FormSubmitButton text={'Log In'} />
        </form>
        <div className="nav">
          First Time in Whistle?
          <NavLink to="/register">
            <FormButton text={'Register'} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

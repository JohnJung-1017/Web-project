import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/fbinstance';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import '../css/login.css';
import SignUpModal from '../components/signUpModal';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/main');
    } catch (err) {
      setError('아이디 혹은 비밀번호가 잘못되었습니다.');
    }
  };

  const openSignUpModal = () => {
    setShowSignUp(true);
  };

  const closeSignUpModal = () => {
    setShowSignUp(false);
  };

  return (
    <div className='login_background'>
      <div className='login_container'>
        <div className='login_box1'>
        </div>
        <div className='login_box2'>
          <h2 className='login_title'>객지분 프로젝트 <br/> 오늘 뭐먹지?</h2>
          <form onSubmit={onSubmit}>
                <div className='login_input_box'>
                    <label htmlFor="Email"><Icon icon="material-symbols:mail-outline-rounded"width="4vh" height="4vh"/></label>
                        <input
                            className='login_input'
                            name="email"
                            type="text"
                            placeholder='exmaple@kookmin.ac.kr'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='login_input_box'>
                        <label htmlFor="Password"><Icon icon="material-symbols:keyboard-lock-outline-rounded" width="4vh" height="4vh"/></label>
                        <input
                            className='login_input'
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='login_button_box'></div>
                        <input
                            className='login_button'
                            type="submit"
                            value="Login"/>
                        <button
                            className='login_button'
                            type="button"
                            onClick={openSignUpModal}>
                            Create Account
                        </button>
            </form>
            {error && <p className='login_error'>{ "아이디 혹은 비밀번호가 잘못되었습니다." }</p>}
        </div>
      </div>
      <SignUpModal show={showSignUp} onClose={closeSignUpModal} />
    </div>
  )
}

export default Login;
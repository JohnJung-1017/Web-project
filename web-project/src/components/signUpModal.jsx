import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase/fbinstance';
import { doc, setDoc } from 'firebase/firestore';
import Modal from './modal';
import '../css/modal.css';

const SignUpModal = ({ show, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [studentId, setStudentId] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    try {
      // Firebase Authentication에 사용자 생성
      await createUserWithEmailAndPassword(auth, email, password);

      // Firestore에 사용자 정보 저장
      await setDoc(doc(db, 'users', studentId), {
        nickname,
        name,
        email,
        phoneNumber,
        studentId,
      });

      onClose(); // Close the modal after successful signup
    } catch (err) {
      setError('회원가입에 실패했습니다.');
    }
  };

  return (
    <Modal show={show} onClose={onClose}>
      <h2>회원가입</h2>
      <form onSubmit={handleSignUp}>
        <div className='login_input_box'>
          <label htmlFor="nickname">Nickname</label>
          <input
            className='login_input'
            name="nickname"
            type="text"
            placeholder='Nickname'
            required
            value={nickname}
            onChange={(e) => setNickname(e.target.value)} />
        </div>
        <div className='login_input_box'>
          <label htmlFor="name">Name</label>
          <input
            className='login_input'
            name="name"
            type="text"
            placeholder='Name'
            required
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='login_input_box'>
          <label htmlFor="signUpEmail">Email</label>
          <input
            className='login_input'
            name="signUpEmail"
            type="email"
            placeholder='example@kookmin.ac.kr'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='login_input_box'>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            className='login_input'
            name="phoneNumber"
            type="text"
            placeholder='010-1234-5678'
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div className='login_input_box'>
          <label htmlFor="studentId">Student ID</label>
          <input
            className='login_input'
            name="studentId"
            type="text"
            placeholder='20195303'
            required
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)} />
        </div>
        <div className='login_input_box'>
          <label htmlFor="signUpPassword">Password</label>
          <input
            className='login_input'
            name="signUpPassword"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='login_input_box'>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className='login_input'
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <div className='login_button_box'>
          <button className='login_button' type="submit">Sign Up</button>
        </div>
        {error && <p className='login_error'>{error}</p>}
      </form>
    </Modal>
  );
};


export default SignUpModal;
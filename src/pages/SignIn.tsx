import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendRequest } from '../lib/common';

import styles from './css/SignIn.module.css';

function Login(): JSX.Element {

  const [userid, setUserid] = useState<string | ''>('');
  const [password, setPassword] = useState<string | ''>('');
  const navigate = useNavigate();

  sendRequest({
    url: '/helloPost',
    method: 'POST',
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): Promise<void>|void => {
    event.preventDefault();

    if (userid === '') {
      alert('id를 입력해주세요.');
      return;
    } else if (password === '') {
      alert('password를 입력해주세요.');
      return;
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        navigate('/');
      }, 1_000);
    });
    
  }

  return (
    <>
      <main className={`${styles['form-signin']}`}>
        <form onSubmit={onSubmit}>
          <h1>challenge-bird</h1>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input id="userid" className="form-control" type="text" placeholder="아이디"
              value={userid} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserid(e.target.value)} />
            <label htmlFor="userid">ID</label>
          </div>

          <div className="form-floating">
            <input id="password" className="form-control" type="password" placeholder="비밀번호"
              value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} /><br />
            <label htmlFor="password">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">로그인</button>
        </form>
      </main>
    </>
  );
}

export default Login;
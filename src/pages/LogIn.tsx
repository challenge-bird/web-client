import React, { useState, useEffect} from 'react';

function Login(): JSX.Element {

  const [userid, setUserid] = useState<string | ''>('');
  const [password, setPassword] = useState<string | ''>('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userid === '') {
      alert('id를 입력해주세요.');
      return;
    } else if (password === '') {
      alert('password를 입력해주세요.');
      return;
    }

    alert('submitted!');
  }

  return (
    <>
    <h1>Login</h1>
    <form onSubmit={onSubmit}>
      <input 
        placeholder="id"
        value={userid}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserid(e.target.value)}
      /><br/>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      /><br/>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default Login;
import React from "react";
import styles from './App.module.scss'
import {useState} from "react";

function App() {
    const [email, setMail] = useState('');
    const [password, setPassword] = useState('')
  return (
    <div className={styles.parent}>
      <h1 className={styles.parent__head}>Hello tailwind</h1>
      <input
          placeholder='Email'
          value={email}
          onChange={e => setMail(e.target.value)}
      /><input
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
      />
        <button className={styles.parent__btn}>Login</button>
    </div>
  );
}

export default App;

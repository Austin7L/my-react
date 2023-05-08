import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  let accounts = [
    { "id": "austin", "pwd": "0000" },
    { "id": "dihan", "pwd": "1234" }
  ];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let flag = false;
    e.preventDefault(); // 避免submit重新跳轉
    for (const value of accounts) {
      if (value.id === id && value.pwd === pwd) {
        flag = true;
      }
      if (flag) break;
    }
    if (flag) {
      alert("登入成功!");
      window.location.href = "/home";
    } else {
      alert("登入失敗!");
    }
  }

  const handleId = (e: any) => {
    setId(e.target.value);
  }

  const handlePwd = (e: any) => {
    setPwd(e.target.value);
  }

  return (
    <>
      <form className={styles.loginForm}>
        <label>Account: </label>
        <input type="text" className={styles.loginInput} onChange={handleId}></input>
        <br />
        <label>Password: </label>
        <input type="password" className={styles.loginInput} onChange={handlePwd}></input>
        <br />
        <button type="submit" className={styles.loginSubmitButton} onClick={handleClick}>submit</button>
      </form>
    </>
  )
}

export default Login;
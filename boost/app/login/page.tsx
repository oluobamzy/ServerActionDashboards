import styles from "@/app/ui/login/login.module.css"
const Login = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="John Doe" name="userName" className={styles.input} />
        <input type="password" name="password" className={styles.input} />
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;

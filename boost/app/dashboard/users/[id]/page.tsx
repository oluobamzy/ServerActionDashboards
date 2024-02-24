import styles from "../../../ui/dashboard/users/singleusers.module.css";
import Image from "next/image";
const SingleUser = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src={"/pngtree-user-vector-avatar-png-image_1541962.jpg"} alt={"profile-image"} fill className={styles.image}/>
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
        <label>Username</label>
        <input type="text" placeholder="John Doe" name="userName" className={styles.input} />
        <label>Email</label>
        <input type="email" placeholder="johndoe@gmail.com" name="email" className={styles.input} />
        <label>Password</label>
        <input type="password" name="password" className={styles.input} />
        <label>Phone</label>
        <input type="text" placeholder="+12345678910" name="phone" className={styles.input} />
        <label>Address</label>
        <textarea placeholder="New York" name="address" className={styles.input} />
        <label>isAdmin?</label>
        <select name="isAdmin" id="isAdmin" className={styles.select}>
          <option value={1}>Yes</option>
          <option value={0}>No</option>
        </select>
        <label>isActive?</label>
        <select name="isActive" id="isActive" className={styles.select}>
          <option value={1}>Yes</option>
          <option value={0}>No</option>
        </select>
        <button type="submit" className={styles.button}>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleUser
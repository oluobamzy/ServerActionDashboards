import styles from '@/app/ui/dashboard/users/addusers.module.css';
export const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Username" name="userName" className={styles.input} required/>
        <input type="email" placeholder="Email" name="email" className={styles.input} required/>
        <input type="password" placeholder="Password" name="password" className={styles.input} required/>
        <input type="text" placeholder="Phone" name="phone" className={styles.input}/>
        <select name="isAdmin" id="isAdmin" className={styles.select}>
          <option value={0} selected>isAdmin?</option>
          <option value={1}>Yes</option>
          <option value={0}>No</option>
        </select>
        <select name="isActive" id="isActive" className={styles.select}>
          <option value={0} selected>isActive?</option>
          <option value={1}>Yes</option>
          <option value={0}>No</option>
        </select>
        <textarea name="address" id="address" placeholder="Address" rows={16}  className={styles.textarea}>
        </textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
export default AddUserPage
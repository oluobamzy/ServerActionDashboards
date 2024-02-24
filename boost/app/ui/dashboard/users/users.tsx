import styles from "./users.module.css";
import Search from "../../dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../../dashboard/pagination/pagination";
const Users = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." className={styles.Search}/>
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Roles</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
               <Image src = {"/pngtree-user-vector-avatar-png-image_1541962.jpg"} alt={"user-image"} width={40} height={40} className={styles.userImage}/>
               John Doe
              </div>
            </td>
            <td>john@gmail.com</td>
            <td>22.02.2024</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>
              <Link href="/dashboard/users/test">
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />  
    </div>
  )
}
export default Users
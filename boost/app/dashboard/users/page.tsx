
import styles from "../../ui/dashboard/users/users.module.css";
import Search from "../../ui/dashboard/search/search";
import Link from "next/link";
export const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/ddashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}></table>
    </div>
  )
}
export default UsersPage


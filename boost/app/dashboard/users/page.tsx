
import styles from "../../ui/dashboard/users/users.module.css";
import Search from "../../ui/dashboard/search/search";
import Users from "@/app/ui/dashboard/users/users";
export const UsersPage = () => {
  return (
    <div className={styles.container}>
      <Users />
    </div>
  )
}
export default UsersPage


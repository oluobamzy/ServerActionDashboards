import styles from './transactions.module.css';
import Image from "next/image";


const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>latest transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Status</th>
            <th className={styles.th}>Date</th>
            <th className={styles.th}>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
              <Image src={"/pngtree-user-vector-avatar-png-image_1541962.jpg"} alt="transaction1" width={40} height={40} className={styles.userImage} />
              John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
              <Image src={"/pngtree-user-vector-avatar-png-image_1541962.jpg"} alt="transaction1" width={40} height={40} className={styles.userImage} />
              John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>
                Done
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
              <Image src={"/pngtree-user-vector-avatar-png-image_1541962.jpg"} alt="transaction1" width={40} height={40} className={styles.userImage} />
              John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Transactions;
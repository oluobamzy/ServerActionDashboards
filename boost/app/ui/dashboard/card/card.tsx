 import styles from './card.module.css';
 import { MdSupervisedUserCircle } from 'react-icons/md';
 const Card = () => {
  return (
    <div className={styles.container}>
         <MdSupervisedUserCircle size={24} />
          <div className={styles.texts}>
            <span className={styles.title}>Total Users</span>
            <span className={styles.number}>10.287</span>
            <span className={styles.details}>
              <span className={styles.positive}>12%</span>More than previous week
              </span>
          </div>
    </div>
  )
}

export default Card
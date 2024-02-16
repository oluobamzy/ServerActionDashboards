
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md';
import styles from './rightbar.module.css';
import Image from 'next/image';
 const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src={"/astronaut.jpg"} alt={"rightbar_img"} fill className={styles.bg}/>
        </div>
        <div className={styles.texts}>
          <span className={styles.notifications}>
          🔥 Available Now
          </span>
          <h3 className={styles.title}>
             How to use the new version of the admin dashboard
          </h3>
          <span className={styles.subTitle}>
            Takes 4mins to learn
          </span>
          <p className={styles.description}>
          Fusce cursus dolor ac massa lacinia pharetra. Sed quis tempus ipsum. Aenean porttitor eu enim nec facilisis. 
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notifications}>
          Coming Soon
          </span>
          <h3 className={styles.title}>
             Partial pre-rendering of actions is coming
          </h3>
          <span className={styles.subTitle}>
            Boost your productivity
          </span>
          <p className={styles.description}>
          Fusce cursus dolor ac massa lacinia pharetra. Sed quis tempus ipsum. Aenean porttitor eu enim nec facilisis.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>

    </div>
  )
}
export default Rightbar
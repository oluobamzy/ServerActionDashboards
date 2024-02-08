import styles from "./menulink.module.css";
import Link from "next/link"; 
 const Menulink = ({item}: {item: any}) => {
  return (
    <Link href={item.path} className={styles.container}>
      {item.icon}
      {item.title}
    </Link>
  )
}
export default Menulink
'use client'
import { usePathname } from "next/navigation";
import styles from "./menulink.module.css";
import Link from "next/link"; 
 const Menulink = ({item}: {item: any}) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}
export default Menulink
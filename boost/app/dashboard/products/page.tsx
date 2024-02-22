import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
const Productspage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." className={styles.Search}/>
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stocks</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
               <Image src = {"/noproduct.jpg"} alt={"product-image"} width={40} height={40} className={styles.productImage}/>
               Iphone
              </div>
            </td>
            <td>Description</td>
            <td>$999</td>
            <td>22.02.2024</td>
            <td>72</td>
            <td>
              <div className={styles.buttons}>
              <Link href="/">
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
export default Productspage
import styles from "../../../ui/dashboard/products/singleusers.module.css";
import Image from "next/image";
const SingleProduct = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src={"/pngtree-user-vector-avatar-png-image_1541962.jpg"} alt={"profile-image"} fill className={styles.image}/>
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
        <label>Title</label>
        <input type="text" placeholder="John Doe" name="title" className={styles.input} />
        <label>Price</label>
        <input type="number" placeholder="23" name="price" className={styles.input} />
        <label>Stock</label>
        <input type="number" name="stock" className={styles.input} />
        <label>Color</label>
        <input type="text" placeholder="red" name="color" className={styles.input} />
        <label>Size</label>
        <textarea placeholder="New York" name="size" className={styles.input} />
        <label>Cat</label>
        <select name="cat" id="cat" className={styles.select}>
          <option value="kitchen">Kitchen</option>
          <option value="computers">Computers</option>
        </select>
        <label>Description</label>
        <textarea placeholder="Description" rows={16} name="description" className={styles.input} />
        <button type="submit" className={styles.button}>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleProduct
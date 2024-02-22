import styles from '@/app/ui/dashboard/products/addproducts.module.css';
export const Addproductpage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Title" name="title" className={styles.input} required/>
        <select name="category" id="category" className={styles.select}>
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computers">Computer</option>
          <option value="furniture">Furniture</option>
        </select>
        <input type="number" placeholder="Price" name="price" className={styles.input} />
        <input type="number" placeholder="Stock" name="stock" className={styles.input} />
        <input type="text" placeholder='color' name="color" className={styles.input} />
        <input type="text" placeholder='size' name="size" className={styles.input} />
        <textarea name="description" id="description" placeholder="Description" rows={16}  className={styles.textarea}>
        </textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
export default Addproductpage
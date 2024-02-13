 const Image = ({src, alt} : {src:any, alt:any}) => {
  return (
    <div> 
      <img src = {src} alt = {alt} width={50} height={50}></img>
    </div>
  )
}
 export default Image
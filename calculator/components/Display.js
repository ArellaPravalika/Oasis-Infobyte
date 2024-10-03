import styles from "./Display.module.css"
function Display({displayvalue}){
  return(
  <div >
    
      <input  className={styles.display} type="text" value={displayvalue} readOnly></input>
      </div>)
}
export default Display;

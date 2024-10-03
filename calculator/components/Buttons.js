import styles from "./Buttons.module.css"
const Buttons=({onbuttonclick})=>{
  const Buttonnames=['C','1','2','+','3','4','-','5','6','*','7','8','/','9','0','=','.']
  return(<div className={styles.buttonBox}>
    {Buttonnames.map((buttons)=>(<button className={styles.button} onClick={()=> onbuttonclick(buttons)}>{buttons}</button>))}
    
  </div>)
}
export default Buttons;
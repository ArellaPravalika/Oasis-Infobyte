
import styles from "./App.module.css"
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { useState } from "react";
function App()
{
  let[calval,setval]=useState("");
  const onbuttonclick=(buttonText) => {
 
    if(buttonText==='C')
    {
        setval("");
    }
    else if(buttonText==='=')
    {
       const result=eval(calval);
       setval(result)
    }
    else{
      const newdisplayvalue=calval+buttonText;
      setval(newdisplayvalue)
    }
  }
  return(<center>
    <h1>CALCULATOR</h1>
    <div className={styles.box}>
       <Display displayvalue={calval}/>
      <Buttons onbuttonclick={onbuttonclick}/>
    </div>
    </center>
  )
}
export default App;
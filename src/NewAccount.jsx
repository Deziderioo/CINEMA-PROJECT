import style from "./NewAccount.module.css"
import { Header } from "./components/header/Header"

export function NewAccount(){
  return(
    <div>
       <Header/>

      <div className={style.wrapTitle}> 
         <strong>new account</strong>
      </div>
      <div className={style.card}>
        <div className={style.wrapInp}>
          <label htmlFor="">Name</label>
          <input placeholder="Ronald"type="text" />
        </div>
        <div className={style.wrapInp}>
          <label htmlFor="">E-mail</label>
          <input placeholder="Ronald@popflix.com"type="text" />
        </div>
        <div className={style.wrapInpPass}>
          <label htmlFor="">Password</label>
          <input placeholder="*****"type="text" />
        </div>
      </div> 
    </div>
      
   
  )
}
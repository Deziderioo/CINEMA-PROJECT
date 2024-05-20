import style from "./cards.module.css"


export default function Cards(){
    return(
        <>
            <div className={style.card}>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/81c2c457691753.5a059d944bf23.jpg" alt="" />
                <div className={style.movieTitle}>
                  <h1>movie title</h1>
                </div>
                     
            </div>
        </>
    )
}
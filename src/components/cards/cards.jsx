import style from "./cards.module.css"


export default function Cards({title, image}){
    return(
        <>
            <div className={style.card}>
                <img src={image} alt={title}/>
                <div className={style.movieTitle}>
                  <h1>{title}</h1>
                </div>
                     
            </div>
        </>
    )
}
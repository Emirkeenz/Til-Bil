import cl from './styled.module.css'

export const Card = ({level, description}) => {
  return(
    <div className={cl.card}>
      <div className={cl.cardImage}>

      </div>
      <div className={cl.cardContext}>
        <button className={cl.levelButtons}>Б 2 деңгээли</button>
        <p>Тереңдетилген курс улантуучу</p>
      </div>
    </div>
  )
}
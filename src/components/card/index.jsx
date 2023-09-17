import cl from './styled.module.css'

export const Card = ({imageSource, level, description}) => {
  return(
    <div className={cl.card}>
      <img src={imageSource}/>
      <div className={cl.cardContext}>
        <button className={cl.levelButtons}>{level}</button>
        <p>{description}</p>
      </div>
    </div>
  )
}
import cl from './styled.module.css'

export const GameCard = ({level, description}) => {
  return(
    <div className={cl.card}>
      <div className={cl.cardImage}></div>
      <div className={cl.cardContext}>
        <h1>Ордуна кой</h1>
        <p>Ар бир сөздү маанисине карай жайгаштыр</p>
      </div>
    </div>
  )
}
import { Card } from "../card"
import cl from './styled.module.css'

export const KyrgyzForAdults = ({title}) => {
  return (
    <>
      <h1>{title}</h1>
      <div className={cl.listOfCards}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="allButtonSection">
        <div className="all">
          <button>Баары :&#x2192;</button>
        </div>
      </div>
    </>
  )
}
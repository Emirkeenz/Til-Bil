import { Card } from "../card"
import cl from './styled.module.css'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

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
      <div className={cl.allButtonSection}>
        <div>
          <button className={cl.allButton}>Баары <MdOutlineArrowForwardIos /></button>
        </div>
      </div>
    </>
  )
}
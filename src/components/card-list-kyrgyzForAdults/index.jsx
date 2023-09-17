import { Card } from "../card"
import cl from './styled.module.css'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

export const KyrgyzForAdults = ({title}) => {
  return (
    <>
      <h1 style={{marginTop: '50px'}}>{title}</h1>
      <div className={cl.listOfCards}>
        <Card imageSource={require('../../images/a1.png')} level={'А 1 деңгээли'} description={'0 дөн баштагандар үчүн'}/>
        <Card imageSource={require('../../images/a2.png')} level={'А 2 деңгээли'} description={'Улантуучу тайпа'}/>
        <Card imageSource={require('../../images/b1.png')} level={'Б 1 деңгээли'} description={'Тереңдетилген курс'}/>
        <Card imageSource={require('../../images/b2.png')} level={'Б 2 деңгээли'} description={'Тереңдетилген курс улантуучу'}/>
      </div>
      <div className={cl.allButtonSection}>
        <div>
          <button className={cl.allButton}>Баары <MdOutlineArrowForwardIos /></button>
        </div>
      </div>
    </>
  )
}
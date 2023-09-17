import { Card } from "../card"
import cl from './styled.module.css'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

export const KyrgyzForKids = ({title}) => {
  return (
    <>
      <h1>{title}</h1>
      <div className={cl.listOfCards}>
        <Card imageSource={require('../../images/1.8age.png')} level={'1.8-3 жаш'} description={'Кеп өстүрүү, жомоктор...'}/>
        <Card imageSource={require('../../images/4-5age.png')} level={'4-5 жаш'} description={'Кеп өстүрүү, баарлашуу'}/>
        <Card imageSource={require('../../images/6-7age.png')} level={'6-7 жаш'} description={'Кыргыз тилинин грамматикасына киришүү'}/>
        <Card imageSource={require('../../images/a1-girl.png')} level={'А 1 деңгээли'} description={'Жогорку класстагы окуучулар үчүн'}/>
      </div>
      <div className={cl.allButtonSection}>
        <div>
          <button className={cl.allButton}>Баары <MdOutlineArrowForwardIos /></button>
        </div>
      </div>
    </>
  )
}
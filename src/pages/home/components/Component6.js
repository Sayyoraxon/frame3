import "./Component6.css"
import Framer from './Framer'
import phone from "../../../assets/img/handmobile.png"
import taxi from "../../../assets/img/taxi.png"

const Component6 = () => {

  const CARD_COLORS1 = [
    {id: 1, color: "#333", img: phone, title: "Экономте время" },
    {id: 2, color: "#999"},
    {id: 3, color: "#E8E8E8" }
];

const CARD_COLORS2 = [
  {id: 1, color: "#D95720", img: taxi, title: "Бесплатная доставка по городу Ташкент" },
  {id: 2, color: "#E29C7E"},
  {id: 3, color: "#F8DACD"}
];

  return (
    <div className='component6'>
        <Framer title={"Оплата"} CARD_COLORS={CARD_COLORS1}/>
        <Framer title={"Доставка"} CARD_COLORS={CARD_COLORS2}/>
    </div>
  )
}

export default Component6
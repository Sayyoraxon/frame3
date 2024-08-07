import './Navbar.scss'
import menu from "../assets/icons/menu.svg"
import search from "../assets/icons/search.svg"
import phone from "../assets/icons/phone.svg"
import arrow from "../assets/icons/vector.svg"

const Navbar = () => {
    return (
        <div className='appbar'>
            <h2>Get it</h2>
            <div className='navbar'>
                <button>
                    <img src={menu} alt="menu" />
                    Продукты
                </button>
                <div>
                    <img src={search} alt="serch" />
                    <input type="text" placeholder="Поиск" />
                </div>
                <a href="#">О нас</a>
                <a href="#">Скидки</a>
                <a href="#">Контакты</a>
                <button className='button2'>
                    <img src={phone} alt="phone" />
                    Позвонить
                </button>
                <button className='btn3'>
                    Оставить заявку
                    <img src={arrow} alt="arrow" />
                </button>
            </div>
        </div>
    )
}

export default Navbar
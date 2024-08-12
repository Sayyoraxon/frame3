import './Navbar.scss'
import menu from "../assets/icons/menu.svg"
import search from "../assets/icons/search.svg"
import phone from "../assets/icons/phone.svg"
import arrow from "../assets/icons/vector.svg"
import heart from "../assets/icons/heart.svg"
import globe from "../assets/icons/globe.svg"
import MobileNavbar from './MobileNavbar'

const Navbar = ({open, setOpen}) => {
    return (
        <>
            {open && <MobileNavbar setOpen={setOpen}/>}
            <div className='navbar'> 
                <h2>Get it</h2>
                <button>
                    <img src={menu} alt="menu" onClick={()=>setOpen(true)}/>
                    <p>
                        Продукты
                    </p>
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
                    <img src={heart} alt="heart" className='img1'/>
                    <p>
                      Позвонить  
                    </p>
                    
                </button>
                <button className='btn3'>
                    <p>
                      Оставить заявку  
                    </p>
                    
                    <img src={arrow} alt="arrow" />
                    <img src={globe} alt="heart" className='img1'/>
                </button>
            </div>
            </>
    )
}

export default Navbar
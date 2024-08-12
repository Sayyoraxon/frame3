import "./MobileNavbar.scss"
import { IoClose } from "react-icons/io5";

const MobileNavbar = ({setOpen}) => {
    return (
        <div className="mobileNav">
            <IoClose onClick={()=>setOpen(false)}/>
            <a href="#">
                О нас
            </a>
            <a href="#">
                Скидки
            </a>
            <a href="#">
                Контакты
            </a>
        </div>
    )
}

export default MobileNavbar
import "./MobileNavbar.scss"
import { IoClose } from "react-icons/io5";

const MobileNavbar = () => {
    return (
        <div className="mobileNav">
            <IoClose />
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
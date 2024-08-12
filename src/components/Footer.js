import "./Footer.scss"
import { PiTelegramLogoLight } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";




const Footer = () => {
    return (
        <div className="footerdiv">
            <div className="footer">
                <div>
                    <div>
                        <h3>Get it</h3>
                        <p>
                            Собирайся, учись, развивайся – всё в
                            одном месте!
                        </p>
                        <p>
                            Пользователи обязаны соблюдать
                            правила пользования сайтом.
                            Размещение объявлений бесплатно с
                            учетом условий использования.
                        </p>
                    </div>
                    <div>
                        <div>
                            <div>
                                <a href="#">
                                    Услуги
                                </a>
                                <a href="#">
                                    Контакты
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    Продукты
                                </a>
                                <a href="#">
                                    Оплата
                                </a>
                                <a href="#">
                                    О нас
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    Продукты
                                </a>
                                <a href="#">
                                    Оплата
                                </a>
                                <a href="#">
                                    О нас
                                </a>
                            </div>
                        </div>
                        <p>
                            Пользователи обязаны соблюдать
                            правила пользования сайтом. Размещение
                            объявлений бесплатно
                            с учетом условий использования.
                        </p>
                    </div>
                    <div id="flex">
                        <div>
                            <PiTelegramLogoLight />
                            <SlSocialFacebook />
                            <FaInstagram />
                            <FiTwitter />
                        </div>
                        <div>
                            <p>Наш телефон:</p>
                            <p>+998 90 000-00-00</p> 
                        </div>
                           
                        <div>
                            <p>Электронная почта:</p>
                            <p>info@gmail.com</p>
                        </div>
                        
                    </div>
                </div>
                <hr />
                <div id="subfooter">
                    <p id="a">Copyright @ 2024</p>
                    <p id="a">Terms of Use</p>
                    <p id="a">Privacy policy</p>
                </div>
            </div>
        </div>

    )
}

export default Footer
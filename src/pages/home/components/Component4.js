import "./Component4.scss"
import phone from "../../../assets/img/apple.png"
import watch from "../../../assets/img/watch.png"
import arrow from "../../../assets/icons/arrow_up.svg"

const Component4 = () => {
    return (
        <div className='component4'>
            <h2>
                Топовые смартфоны
            </h2>
            <div>
                <div>
                    <p>Apple</p>
                    <p>
                        iPhone 15 Pro Max
                    </p>
                    <p>
                        12 399 000 сум
                    </p>
                    <img src={phone} alt="phone"/>
                    <button>
                        <img src={arrow} alt="arrow"/>
                    </button>
                </div>
            
                <div>
                    <p>Lg</p>
                    <p>
                        L3 Galaxy
                    </p>
                    <p>
                        12 399 000 сум
                    </p>
                    <img src={watch} alt="watch"/>
                    <button>
                        <img src={arrow} alt="arrow"/>
                    </button>
                </div>
          
                <div>
                    <p>Xiaomi</p>
                    <p>
                        miPhone
                    </p>
                    <p>
                        12 399 000 сум
                    </p>
                    <img src={phone} alt="phone"/>
                    <button>
                        <img src={arrow} alt="arrow"/>
                    </button>
                </div>
           
                <div>
                    <p>Samsung</p>
                    <p>
                        Get to know iPad.
                    </p>
                    <p>
                        12 399 000 сум
                    </p>
                    <img src={watch} alt="watch"/>
                    <button>
                        <img src={arrow} alt="arrow"/>
                    </button>
                </div>
           
                <div>
                    <p>Apple</p>
                    <p>
                        iPhone 15 Pro Max
                    </p>
                    <p>
                        12 399 000 сум
                    </p>
                    <img src={phone} alt="phone"/>
                    <button>
                        <img src={arrow} alt="arrow"/>
                    </button>
                </div>
          
                <div>
                    <p>Samsung</p>
                    <p>
                        Get to know iPad.
                    </p>
                    <p>
                        12 399 000 сум
                    </p>
                    <img src={watch} alt="watch"/>
                    <button>
                        <img src={arrow} alt="arrow"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Component4
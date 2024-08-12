import "./Component4.scss"
import phone from "../../../assets/img/apple.png"
import watch from "../../../assets/img/watch.png"
import arrow from "../../../assets/icons/arrow_up.svg"
import { useEffect, useRef } from "react"

const Component4 = ({setScroll}) => {

    const scrollRef = useRef()

    

    useEffect(() => {
        const handleWheel = (event) => {
            const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

          if (scrollRef.current) {
            if (event.deltaY !== 0) {
              scrollRef.current.scrollLeft += event.deltaY;          
            }  
            if(scrollRef.current.scrollLeft !== 0 && scrollRef.current.scrollLeft <  maxScrollLeft){
            event.preventDefault() 
            setScroll("hidden")
          }else{
            setScroll("scroll")
          }
        }       
        };
    
        const scrollElement = scrollRef.current;
        if (scrollElement) {
          scrollElement.addEventListener('wheel', handleWheel);
        }
    
        return () => {
          if (scrollElement) {
            scrollElement.removeEventListener('wheel', handleWheel);
          }
        };
      }, []);

    return (
        <div className='component4'>
            <h2>
                Топовые смартфоны
            </h2>
            <div ref={scrollRef}>
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
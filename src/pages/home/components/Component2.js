import "./Component2.scss"
import iphone from "../../../assets/img/iphone3.png"
import iphon1 from "../../../assets/img/iphone2.png"
import watch from "../../../assets/img/watch.png"
import { useEffect, useRef } from "react"


const Component2 = () => {

    const scrollRef = useRef()

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
          if (scrollRef.current) {
            if (event.deltaY !== 0) {
              scrollRef.current.scrollLeft += event.deltaY;
                
            }  
            if(scrollRef.current.scrollLeft > 0 && scrollRef.current.scrollLeft < 1500){
            event.preventDefault() 
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
        <div className='component2'>
            <p>Получи все первым</p>
            <div className="scroll" ref={scrollRef}>


                <div>
                    <p>
                        Charging as easy
                        as USB-C.
                    </p>
                    <img src={watch} alt="commandity" />

                </div>
                <div>
                    <p>
                        Charging as easy
                        as USB-C.
                    </p>
                    <img src={iphone} alt="commandity" />


                </div>
                <div className="three">
                    <p>
                        Charging as easy
                        as USB-C.
                    </p>
                    <img src={iphon1} alt="commandity" />


                </div>

            </div>

        </div>
    )
}

export default Component2
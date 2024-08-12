import "./Component1.scss"
import smartwatch from "../../../assets/img/smartwatch.png"
import phone from "../../../assets/img/phone.png"
import airpods from "../../../assets/img/airpods.png"
import iphone from "../../../assets/img/iphone.png"
import airpods1 from "../../../assets/img/airpods1.png"
import arrow from "../../../assets/icons/arrow_up.svg"
import { useEffect, useRef } from "react"

const Component1 = ({setScroll}) => {

   const scrollRef = useRef()

   useEffect(() => {
       const handleWheel = (event) => {
         const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

         if (scrollRef.current) {
           if (event.deltaY !== 0) {
             scrollRef.current.scrollLeft += event.deltaY;          
           }  
           if(scrollRef.current.scrollLeft !== 0 && scrollRef.current.scrollLeft < maxScrollLeft){
           event.preventDefault() 
           setScroll("hidden")
         }else {
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
    <div className='component1' ref={scrollRef}>
        <div>
           <img src={smartwatch} alt="smartwatch"/>
           <button>
                <img src={arrow} alt="arrow"/>
           </button> 
        </div>
        <div>
           <img src={phone} alt="smartwatch"/> 
           <button>
                <img src={arrow} alt="arrow"/>
           </button>  
        </div>
        <div>
           <img src={airpods} alt="smartwatch"/> 
           <button>
                <img src={arrow} alt="arrow"/>
           </button> 
        </div>
        <div>
           <img src={iphone} alt="smartwatch"/> 
           <button>
                <img src={arrow} alt="arrow"/>
           </button>  
        </div>
        <div>
           <img src={airpods1} alt="smartwatch"/> 
           <button>
                <img src={arrow} alt="arrow"/>
           </button>  
        </div>
        <div>
           <img src={smartwatch} alt="smartwatch"/> 
           <button>
                <img src={arrow} alt="arrow"/>
           </button>  
        </div>
        <div>
           <img src={phone} alt="smartwatch"/> 
           <button>
                <img src={arrow} alt="arrow"/>
           </button>  
        </div>
        <div>
           <img src={airpods} alt="smartwatch"/> 
           <button>
                <img src={arrow} alt="arrow"/>
           </button>  
        </div>
        <div>
           <img src={iphone} alt="smartwatch"/> 
           <button>
                <img src={arrow} alt="arrow"/>
           </button>  
        </div>
        <div>
           <img src={airpods1} alt="smartwatch"/> 
           <button>
                <img src={arrow} alt="arrow"/>
           </button> 
        </div>   
    </div>
  )
}

export default Component1
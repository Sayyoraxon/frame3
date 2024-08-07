import "./Component1.scss"
import smartwatch from "../../../assets/img/smartwatch.png"
import phone from "../../../assets/img/phone.png"
import airpods from "../../../assets/img/airpods.png"
import iphone from "../../../assets/img/iphone.png"
import airpods1 from "../../../assets/img/airpods1.png"
import arrow from "../../../assets/icons/arrow_up.svg"

const Component1 = () => {
  return (
    <div className='component1'>
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
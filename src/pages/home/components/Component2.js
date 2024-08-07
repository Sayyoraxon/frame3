import "./Component2.scss"
import iphone from "../../../assets/img/iphone3.png"
import iphon1 from "../../../assets/img/iphone2.png"
import watch from "../../../assets/img/watch.png"


const Component2 = () => {
    return (
        <div className='component2'>
            <p>Получи все первым</p>
            <div className="scroll">
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
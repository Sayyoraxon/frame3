import "./Component5.scss"
import macbook from "../../../assets/img/macbook.png"

const Component5 = () => {
  return (
    <div className='component5'>
        <h2>
            Специальное предложение 
        </h2>
        <div>
            <div>
                <p>Macbook Air</p>
                <p>16 inch, 32 Gb, 4 CPU</p>
                <button>
                    Купить
                </button>
                <img src={macbook} alt="macbook"/>
            </div>
            <div>
                <p>Macbook Air</p>
                <p>16 inch, 32 Gb, 4 CPU</p>
                <button>
                    Купить
                </button>
                <img src={macbook} alt="macbook"/>
            </div>
        </div>
    </div>
  )
}

export default Component5
import './Card.css'
import cardBackImg from '../assets/imgs/card-back.png'

export default function Card({
    url,
    handleClick
}) {

    return (
    <section className='card'>
        <div className='card-front'>
            <img 
                src={url} 
                alt="memory-card"
                onClick={handleClick}
            />  
        </div>
        <div className='card-back'>
            <img
                src={cardBackImg}
                alt='card-back'
            ></img>
        </div>
    </section>
    )
}
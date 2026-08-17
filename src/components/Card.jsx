import './Card.css'
import cardBackImg from '../assets/imgs/card-back.png'
import { useState, useEffect } from 'react'

export default function Card({
    url,
    handleClick
}) {
    const [flipped, setFlipped] = useState(false)

    useEffect(() => {
        setFlipped(true);
    }, [])

    return (
    <section className={`card ${flipped ? "flipped" : ""}`}>
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
import './Card.css'


export default function Card({
    url,
    handleClick
}) {

    return (
    <section className='card'>
        <img 
            src={url} 
            alt="memory-card"
            onClick={handleClick}
        />        
    </section>
    )
}
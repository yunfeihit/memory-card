import './Card.css'


export default function Card({
    url,
    handleClick
}) {

    return (
    <section className='card'>
        <img 
            src={url} 
            alt="card"
            onClick={handleClick}
        />        
    </section>
    )
}
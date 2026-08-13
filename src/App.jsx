import './App.css'
import CardList from './components/CardList'




export default function App() {

    const handleClickCard = () => null;

    return (
        <section className='main'>
            <CardList 
                cardAmount={4}
                handleClickCard={handleClickCard}
            />
        </section>
    )
}
import './App.css'
import CardList from './components/CardList'




export default function App() {


    return (
        <section className='main'>
            <CardList 
                cardAmount={4}
            />
        </section>
    )
}
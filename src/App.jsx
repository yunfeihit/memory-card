import './App.css'
import CardList from './components/CardList'
import GameOver from './components/GameOver';
import {useState} from 'react'



export default function App() {

const [score, setScore] = useState(0);
const [highestScore, setHighestScore] = useState(0);
const [gameOver, setGameOver] = useState(false);
const [gameKey, setGameKey] = useState(0);

const getOneScore = () => setScore(prev => prev + 1);

    return (
        <>
            <section className='header'>
                <div className='score-board'>
                    <div>Score: {score}</div>
                    <div>Highest Score: {highestScore}</div>
                </div>
            </section>

            <section className='main'>
                {
                    gameOver ? 
                        <GameOver 
                            highestScore={highestScore}
                            setGameKey={setGameKey}
                            setGameOver={setGameOver}
                            setScore={setScore}
                        /> :
                        <CardList 
                            cardAmount={4}
                            handleGetScore={getOneScore}
                            setHighestScore={setHighestScore}
                            score={score}
                            setGameOver={setGameOver}
                            key={gameKey}
                        />
                }
            </section>               
        </>
    )
}
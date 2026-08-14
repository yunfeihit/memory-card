import './GameOver.css'

export default function GameOver({
    highestScore,
    setGameKey,
    setGameOver,
    setScore
}) {
    const startAgain = () => {
        setGameKey(prev => prev + 1);
        setGameOver(false);
        setScore(0);
    }

    return (
        <section className='game-over-section'>
            <p>Game Over!</p>
            <p>Your Final Score is {highestScore}</p>
            <button
                onClick={startAgain}
            >Start Again</button>
        </section>
    )
}
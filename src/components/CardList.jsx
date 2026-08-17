import './CardList.css'
import Card from './Card.jsx'
import { useEffect, useState } from 'react';
import pokemonImgUrlsPromise from '../api/pokemon.js';

//Tool Functions:
const getRandomItems = (array, n) => {
    if(array.length === 0) return [];

    //Since 'array' is a state, it should not be changed directlly
    const copy =[...array];

    const randomItems = []
    for(let i = 0; i < n; i++) {
        const randomIndex = Math.floor(Math.random() * copy.length);
        randomItems.push(copy.splice(randomIndex, 1)[0])
    }
    return randomItems;
}

export default function CardList({
    cardAmount,
    handleGetScore,
    setHighestScore,
    score,
    setGameOver,
}) {
    //Edge Case:
    if(cardAmount > 20) {
        console.log('cards amount must less than 20!');
        return;
    }
    
    //State:
    const [allImgUrls, setAllImgUrls] = useState([]);
    const [clickedImgs, setClickedImgs] = useState([]);
    const [contentImgs, setContentImgs] = useState([]);

    useEffect(() => {
        pokemonImgUrlsPromise
            .then(allImgUrls => {
                setAllImgUrls(allImgUrls);
                const contentImgs = getRandomItems(allImgUrls, cardAmount);
                setContentImgs(contentImgs);
            })
    }, [])

    //Inner Function:
    const clickCard = (url) => {
        //Judge if game is end first:
        if(clickedImgs.includes(url)) {
            endGame();
            return;
        }
        //mark clicked img, ramdom choose new contentImgs:
        setClickedImgs(prev => [...prev, url]);
        const newContentImgs = getRandomItems(allImgUrls, cardAmount);
        setContentImgs(newContentImgs);
        //add score:
        handleGetScore();
    }

    const endGame = () => {
        setHighestScore(prev => Math.max(prev, score));
        setGameOver(true);
    };

    //when render at the first time, 'imgUrls' will be empty, show 'loading...'
    //after render, useEffect will run and load the 'imgUrls'
    return (
        <section 
            className='card-list'
        >
            {
                contentImgs.length === 0
                ? <div>pending...</div>
                : contentImgs.map(url => 
                    <Card
                        key={`${url}-${Date.now()}`}
                        url={url}
                        handleClick={() => clickCard(url)}
                    />
                )
            } 
        </section>
)}

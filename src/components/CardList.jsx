import './CardList.css'
import Card from './Card.jsx'
import { useEffect, useState } from 'react';
import pokemonImgUrlsPromise from '../api/pokemon.js';

//Inner Function
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

const arrayToMarkedArray = (array) => {
    const markArray = []
    for(let i = 0; i < array.length; i++) {
        markArray.push({
            url: array[i],
            clicked: false
        })
    }
    return markArray;
}

export default function CardList({
    cardAmount,
    handleClickCard
}) {
    if(cardAmount > 20) {
        console.log('cards amount must less than 20!');
        return
    }
    
    const [contentImgs, setContentImgs] = useState([]);

    useEffect(() => {
        pokemonImgUrlsPromise
            .then(
                imgUrls => {
                    const contentImgs = getRandomItems(imgUrls, cardAmount);
                    setContentImgs(contentImgs)
                })
    }, [cardAmount]);

    let sectionContent = [];
    //when render at the first time, 'imgUrls' will be empty, show 'loading...'
    //after render, useEffect will run and load the 'imgUrls'
    if(contentImgs.length === 0) {
        sectionContent.push(
        <div>pending...</div>
    )} else { 
        for(let i = 0; i < cardAmount; i++) {
            sectionContent.push(
                <Card
                    key={contentImgs[i]}
                    url={contentImgs[i]}
                    handleClick={handleClickCard}
                />)
    }}

    return (
        <section className='card-list'>
            {sectionContent} 
        </section>
)}

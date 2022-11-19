import React from "react";
import axios from "axios";
import FlipCard from "./FlipCard";
import './Gameplay.css';



function Gameplay () {
    const [cards, setCard] = React.useState([]);

    const fetchCards = () => {
        axios.get('https://opentdb.com/api.php?amount=50')
        .then( (response) => {
            console.log(response.data.results)
            setCard(response.data.results)
        })
    }

    React.useEffect(() => {
        fetchCards()
    }, [] );


    return (
        <div>
            <h1 className="home-header"> Online Trivia Game</h1>
            <div className="gameplay">
                {
                    cards.map((card) => <FlipCard key={card.question} card = {card}/>)
                    
                }
            </div>
        </div>
    )
}

export default Gameplay;
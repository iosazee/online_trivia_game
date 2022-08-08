import React from "react";
import axios from "axios";
import FlipCard from "./FlipCard";



function Gameplay () {
    // REVIEW: I suggest changing setCard to setCards as there are multiple cards
    const [cards, setCard] = React.useState([]);

    // REVIEW: nice use of function to wrap the api call and execute it when needed
    const fetchCards = () => {
        axios.get('https://opentdb.com/api.php?amount=50')
        .then( (response) => {
            console.log(response.data.results)
            setCard(response.data.results)
        })
    }

    // REVIEW: good use of the useEffect hook to fetchCards on pae load
    React.useEffect(() => {
        fetchCards()
    }, [] );


    return (
        <div className="gameplay">
            <h1 className="home-header">Zee Multiplayer Online Trivia Game</h1>
            {
                // // REVIEW: Good implementation mapping the cards and passing the correct props
                cards.map((cardObject) => <FlipCard key={cardObject.question} card = {cardObject}/>)
                
            }
             
        </div>
    )
}

export default Gameplay;
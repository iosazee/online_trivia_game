import React from "react";
import axios from "axios";
import Card from "./Card";



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
        <div className="gameplay">
            <h1 className="home-header">Zee Multiplayer Online Trivia Game</h1>
            {
                cards.map((cardObject) => <Card key={cardObject.question} card = {cardObject}/>)
                
            }
             
        </div>
    )
}

export default Gameplay;
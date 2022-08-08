import parse from 'html-react-parser';
import './FlipCard.css'
import React from 'react';
import cn from 'classnames';


function FlipCard (props) {
    const [showBack, setShowBack ] = React.useState(false);

    function handleClick () {
        setShowBack(!showBack)
    }
    
    return (
        <div className='flipcard-outer' onClick={handleClick}>
            {/* REVIEW: nice use of npm package and discovering it independently but 
            there is a way to do this without a package 
             I would advise you to try and do this without the need of a package.
             TODO: Research conditional rendering using classes in React, this will give you examples
            */}
            <div className={cn("flipcard-inner", {showBack})}>
                <div className='card front'>
                    {/* // REVIEW: Nice use of a package to solve a potentially complex issue */}
                    <h3>{parse(props.card.question)}</h3>
                    <p>{parse(props.card.category)}</p>
                    <p>{parse(props.card.difficulty)}</p>
                </div>
                <div className='card back'>
                    <h2>{parse(props.card.correct_answer)}</h2>
                </div>
            </div>
        </div>
    )
}

export default FlipCard;
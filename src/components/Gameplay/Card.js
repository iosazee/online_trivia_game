import parse from 'html-react-parser';
import './Card.css'


function Card (props) {
   
    return (
        <div className='flip-card'>
            <div className='flip-card-inner' id='flip-card-inner'>
                <div className='flip-card-front'>
                    <h3 className='flip-card-header'>{parse(props.card.question)}</h3>
                    <p className='flip-card-para1'>{props.card.category}</p>
                    <p className='flip-card-para2'>{props.card.difficulty}</p>
                </div>
                <div className='flip-card-back'>
                    <h2>{parse(props.card.correct_answer)}</h2>
                </div>
            </div>
           
        </div>
    )
}

export default Card;
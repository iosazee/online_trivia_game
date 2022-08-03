import Footer from "./Footer/Footer";
import "./Home.css";

function Home () {
    return (
        <div className="home">
            <h1 className="home-header">Zee Multiplayer Online Trivia Game</h1>
            <img title="exerciseyourbrain" src="Images/exerciseYourBrain.png" alt="exerciseyourbrain" className="brainImage"/>
            <Footer />
        </div>
    )
}

export default Home;
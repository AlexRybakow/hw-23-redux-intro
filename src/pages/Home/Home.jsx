
import StarTrek from './spok.jpeg'

const Home = () => {
    return(
        <div className="home-page">
            <img className='home-pic' src={StarTrek} alt='mr-spock'></img>
            <h1>Choose the page and live long and prosper</h1>
        </div>
    )
}

export default Home;
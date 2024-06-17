import Container from '../../components/Container'
import Footer from './components/Footer'
import Header from './components/Header'
import videoGame from './video_games.svg'
import Container from '../../components/Container'
import { Link } from 'react-router-dom'

function Home() {
    return (     
    <>
      <Header />
      <Container>
        <section className='container'>
          <div className='apresentacao'>
            <p>
              Olá, sou <br/>
              <span>Helena Rezende</span> <br/>
              User de Aim Assist no COD Warzone
            </p>
              <Link to="/sobre" className='btn btn-red'>
              Saiba mais sobre mim
              </Link>
          </div>
          <figure>
            <img className='img-home' src={videoGame} alt="Imagem de Home" />
          </figure>
        </section>
      </Container>
      <Footer />
    </>
    )
}

export default Home

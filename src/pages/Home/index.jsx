import videoGame from '../../video_games.svg'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className={styles.home}>
        <div className={styles.apresentacao}>
          <p>
            Olá, sou <br />
            <span>Helena Rezende</span> <br />
            Desenvolvedora Junior
          </p>
          <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
            Saiba mais sobre mim
          </Link>
        </div>
        <figure>
          <img className='img-home' src={videoGame} alt="Imagem de Home" />
        </figure>
      </section>
    </>
  )
}

export default Home

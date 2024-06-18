
import styles from './Sobre.module.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { FaPhp } from "react-icons/fa";


function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <img src="https://s2.glbimg.com/khtwDhvIrhx3-12UEnSoQPyeVnM=/e.glbimg.com/og/ed/f/original/2017/12/06/pidgeon-425672_1920.jpg" alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Helena Rezende</span> <br />
                    <strong>Desenvolvedora e monitora</strong> </p>

                    <p>Trabalho como monitora desde 2023.</p>

                    <p>Aprimorando habilidades em HTML, CSS, JS, ReactJS, C# e PHP</p>

                    <p>Ajudo baixinhos a programar</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <FaHtml5 className={styles.icone}/>
                    <FaCss3Alt className={styles.icone}/>
                    <IoLogoJavascript className={styles.icone}/>
                    <FaJava className={styles.icone}/>
                    <FaReact className={styles.icone}/>
                    <TbBrandCSharp className={styles.icone}/>
                    <FaPhp className={styles.icone}/>
                </div>
            </div>

        </section>
    )
}

export default Sobre


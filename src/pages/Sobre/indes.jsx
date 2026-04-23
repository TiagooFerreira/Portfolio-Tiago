import styles from './Sobre.module.css'
import avatar from './images/avatar.png'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import node from './images/icon-node.svg'
import sql from './images/icon-sql.svg'


function Sobre() {
    return (

        <section className={styles.sobre}>

            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>
                    <p>Sou <span>Tiago Ferreira</span><br />
                    <strong>Dev Full Stack</strong></p>

                    <p>Trabalho com desenvolvimento Web desde 2022.</p>
                    <p>Sou apaixonado por transformar ideias em realidade digital.</p>

                    <p>Especializado em criação de aplicações dinâmicas e inuitivas, <br />
                        com foco na experiência do usuário.</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="ícone do Html" />
                    <img src={css} alt="ícone do css" />
                    <img src={js} alt="ícone do js" />
                    <img src={react} alt="ícone do react" />
                    <img src={node} alt="ícone do node" />
                    <img src={sql} alt="ícone do sql" />
                </div>
            </div>
        </section>

    )
}

export default Sobre

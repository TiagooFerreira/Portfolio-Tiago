import { FaCss3Alt, FaHtml5, FaJava, FaJs, FaPython, FaReact } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import styles from './Card.module.css'
import { RiJavaLine } from 'react-icons/ri'

function Card({ name, description, html_url, languages }) {

    const iconsMap = {
        JavaScript: <FaJs />,
        HTML: <FaHtml5 />,
        CSS: <FaCss3Alt />,
        React: <FaReact />,
        Java: <FaJava />,
        Python: <FaPython />
    }

    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>

            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    {languages && languages.map((lang) => (
                        <span key={lang}>
                            {iconsMap[lang] || null}
                        </span>
                    ))}
                </div>

                <a 
                  href={html_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.botao}
                >
                    <BsArrowRight />
                </a>
            </div>
        </section>
    )
}

export default Card
import { useEffect, useState } from "react"
import Card from "../../components/Card/indes"
import styles from './Projetos.module.css'

function Projetos() {

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            try {
                const response = await fetch(
                    'https://api.github.com/users/tiagooferreira/repos?page=1&per_page=50'
                )
                const data = await response.json()

                const repoLinguagens = await Promise.all(
                    data.map(async (repo) => {
                        const langResponse = await fetch(repo.languages_url)
                        const languagesData = await langResponse.json()

                        return {
                            ...repo,
                            languages: Object.keys(languagesData)
                        }
                    })
                )

                setRepositories(repoLinguagens)

            } catch (error) {
                console.error("Erro ao buscar repositórios:", error)
            }
        }

        buscarRepositorios()
    }, [])

    return (
        <section className={styles.projetos}>
            <h2>Projetos</h2>

            {
                repositories.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            repositories.map((repo) => (
                                <Card 
                                    key={repo.id}
                                    name={repo.name} 
                                    description={repo.description} 
                                    html_url={repo.html_url}
                                    languages={repo.languages}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando repositórios...</p>
                )
            }

        </section>
    )
}

export default Projetos
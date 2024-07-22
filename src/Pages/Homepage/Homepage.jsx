import "./homepage.css"
import picture from "../../Assets/vm.jpg"
import { motion } from "framer-motion"

const Homepage = () => {
    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="homepagePresentation">
                <img src={picture} alt="vincent machtelinck - développeur web" className="picture"></img>
                <article className="homepageText">
                    <p className="bienvenue">Bienvenue</p>
                    <p className="aPropos">A propos de moi</p>
                    <p>Je suis persuadé que nous pouvons avoir plusieurs vies professionnelles. La diversité des fonctions occupées, des entreprises et des secteurs d'activités dans lesquelles nous avons travaillés, crée notre richesse.</p>
                    <p>C'est cette richesse qui me permet d'appréhender chaque nouveaux challenges différemment.</p>
                </article>
                <span className="homepageBar"></span>
                <article className="homepageList">
                    <p>Dans cette dynamique, je vous propose de:</p>
                    <li>Créer et développer des interfaces utilisateur épurées et attractives.</li>
                    <li>Intégrer des composants front-end avec REACT pour offrir une expérience utilisateur fluide et réactive.</li>
                    <li>Travailler en synergie avec les designers UX/UI pour assurer une cohérence visuelle et une ergonomie optimale.</li>
                    <li>Collaborer étroitement avec les développeurs back-end pour intégrer les APIs et fonctionnalités du site.</li>
                    <li>Veiller au temps de chargement des pages web et garantir une expérience utilisateur optimale.</li>
                    <li>Assurer la compatibilité des interfaces avec différents navigateurs et dispositifs grâce à un design responsive.</li>
                    <li>Donner vie à vos projets web.</li>
                </article>
            </motion.section>
        </>
    )
}

export default Homepage;
import { motion } from "framer-motion";
import "./cv.css"

const CV = () => {
    return (
        <>
            <motion.section 
            initial={{opacity:0}}
            animate={{ opacity:1}}
            transition={{ duration: 2 }}
            className="cvContainer">
                <h3>Expérience professionnelle</h3>
                <div className="xpContainer">
                    <div>
                        <div className="xpTitle">
                            <p className="xpText">2024 - aujourd'hui</p>
                            <h2>Développeur Frontend</h2>
                        </div>
                        <div className="xpText">
                            <p>Technologie utilisée: React</p>
                            <p>Langages: HTML, CSS, Sass, Javascript, JSX, Redux, NodeJS</p>
                            <p>Logiciels: Visual Studio Code, Swagger, Github, Figma</p>
                            <p>Outils: React Dev Tool, Wave, Lighthouse</p>
                            <p>Particulièrement vigilant au GreenCode et au SEO</p>
                        </div>
                    </div>
                    <div >
                        <div className="xpTitle">
                            <p className="xpText">2016 - 2023</p>
                            <h2>Conseiller Financier Professionnel</h2>
                        </div>
                        <div className="xpText">
                            <p className="society">Crédit Agricole du Languedoc</p>
                            <p>Gestion d’un portefeuille de 600 clients professionnels</p>
                            <p>Analyse financière</p>
                            <p>Montage des dossiers de financement</p>
                            <p>Développement d’une relation de partenariat et de confiance avec
                                les clients</p>
                            <p>Développement commercial du portefeuille</p>
                        </div>
                    </div>
                    <div>
                        <div className="xpTitle">
                            <p className="xpText">2009 - 2016</p>
                            <h2>Responsable Marketing</h2>
                        </div>
                        <div className="xpText">
                            <p className="society">BMW - MINI Béziers</p>
                            <p>Elaboration de la stratégie marketing et communication</p>
                            <p>Définition du budget annuel</p>
                            <p>Réaliser, présenter et défendre le bilan des actions marketing
                                auprès des menbres du comité de direction</p>
                            <p>Féderer la force de vente aux projets marketing</p>
                            <p>Mise en place de la stratégie digitale des concessions</p>
                        </div>
                    </div>
                    <div>
                        <div className="xpTitle">
                            <p className="xpText">2006 - 2009</p>
                            <h2>Assistant Marketing</h2>
                        </div>
                        <div className="xpText">
                            <p className="society">Mercedes-Benz Paris</p>
                        </div>
                    </div>
                </div>
                <div className="xpLine"></div>
                <h3>Formation</h3>
                <div>
                    <div>
                        <div className="xpTitle">
                            <p className="xpText">2024</p>
                            <h2>Intégrateur Web - Bac + 2</h2>
                        </div>
                        <div className="xpText">
                            <p>Certfication professionnelle RNCP - Openclassrooms</p>
                        </div>
                    </div>
                    <div>
                        <div className="xpTitle">
                            <p className="xpText">2006</p>
                            <h2>Ecole Supérieure de Commerce de Montpellier - Bac + 5</h2>
                        </div>
                        <div className="xpText">
                            <p>Spécialisation négociation-vente</p>
                        </div>
                    </div>
                    <div>
                        <div className="xpTitle">
                            <p className="xpText">2004</p>
                            <h2>Sunderland University (UK) - Bac + 3</h2>
                        </div>
                        <div className="xpText">
                            <p>Bachelor in Business Strategy</p>
                        </div>
                    </div>
                    <div>
                        <div className="xpTitle">
                            <p className="xpText">2002</p>
                            <h2>Institut Universitaire de Technologie de Lille - Bac + 2</h2>
                        </div>
                        <div className="xpText">
                            <p>DUT Génie Electrique et Informatique Industriel</p>
                        </div>
                    </div>
                </div>
                <div className="xpLine"></div>
            </motion.section>
            
            <motion.section 
            initial={{opacity:0}}
            animate={{ opacity:1}}
            transition={{ duration: 3 }}
            className="knownContainer">
                <div className="knownTextContainer">
                    <h3 className="knownTitle">Savoir-faire</h3>
                    <div className="xpText">
                        <p>Gestion de projets en équipe <strong>méthode Agile</strong></p>
                        <p>Fédèrer autour d’un projet</p>
                        <p>Prendre de la hauteur / Trouver des solutions</p>
                        <p>Atteindre des objectifs commerciaux</p>
                    </div>
                </div>
                <div className="knownTextContainer">
                    <h3 className="knownTitle">Savoir-être</h3>
                    <div className="xpText">
                        <p>Intelligence relationnelle</p>
                        <p>Orientation client</p>
                        <p>Positivité</p>
                        <p>Vision globale</p>
                    </div>
                </div>
            </motion.section>
        </>
    );
}

export default CV;
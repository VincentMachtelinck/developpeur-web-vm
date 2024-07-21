import { Link } from "react-router-dom";
import "./cards.css"
import { motion } from "framer-motion";

const Card = ({ pictures, description, lienGithub, title, webSite }) => {
    return (
        <motion.figure
            initial={{opacity:0}}
            animate={{ opacity:1}}
            transition={{ duration: 2 }}
            className="card">
            <img src={pictures} alt={title} className="cardPictures" />
            <h3 className="cardTitle">{title}</h3>
            <p className="cardText">{description}</p>
            <div className="lienContainer">
                <Link to={webSite} target="_blank" className="lien">Website</Link>
                <Link to={lienGithub} target="_blank" className="lien">Lien Github</Link>
            </div>
        </motion.figure>
    );
}
export default Card;
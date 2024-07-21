import Cards from "../../Components/Cards/Cards"
import "./projets.css"
import projets from "../../Datas/projets.json"

const Projects = () => {
    return (
        <section
            className="workContainer">
            {projets.map(item => {
                return (<Cards
                    key={item.id}
                    title={item.title}
                    pictures={item.pictures}
                    description={item.description}
                    lienGithub={item.lienGithub}
                    webSite={item.webSite}
                />)
            })}
        </section>
    )
}

export default Projects;
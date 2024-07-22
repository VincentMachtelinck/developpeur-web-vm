import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="footerText">
                <p className="footerFont1">Téléphone</p>
                <p className="footerFont2">06 213 220 03</p>
            </div>
            <div className="footerText">
                <p className="footerFont1">E-mail</p>
                <p className="footerFont2">vincent.fs@yahoo.com</p>
            </div>
            <div className="footerText">
                <p className="footerFont1">Suivez-moi</p>
                <a href="https://github.com/VincentMachtelinck" rel="noreferrer" target="_blank">
                    <div className="github">
                        <img src="https://i.postimg.cc/Hk1gBN9S/github-1.webp" className="logoGithub" alt="logo github" />
                        <p className="githubTitle">Github</p>
                    </div>
                </a>
            </div>
            <div className="footerText">
                <p className="footerFont2">Politique de confidentialité</p>
                <p className="footerFont2">Mentions légales</p>
                <p className="footerFont2">Politique de cookies</p>
            </div>
        </footer>);
}

export default Footer;
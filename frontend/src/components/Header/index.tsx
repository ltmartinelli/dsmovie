import GitHubIcon from '../../assets/img/github.svg';
import './styles.css';

export default function Header()
{
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/ltmartinelli" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <img src= {GitHubIcon} alt="github" />
                            <p className="dsmovie-contact-link">/ltmartinelli</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}
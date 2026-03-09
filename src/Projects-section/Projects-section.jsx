import './Projects-section.css'

import geneticChain from '../assets/genetic-chain.jpg'
import premierLeagueLogo from '../assets/premier-league-logo.jpeg'

function ProjectsSection() {
    return (
        <div id='projects-section-container'>
            <h1>Project Showcase</h1>
            <p>Selected work that demonstrates my technical expertise</p>

            <ul id='project-list'>
                <li className='project-list-item'>
                    <section className='project-image-container'>
                        <img src={geneticChain} alt='Genetic chain'></img>
                    </section>
                   
                    <h3>Molecular Data Analysis System</h3>
                    <p>
                        A modular C++20 DNA analysis engine that processes genomic data to detect disease susceptibility. 
                        Built with custom data structures, the Strategy pattern for extensible analysis algorithms, 
                        and a layered architecture with centralized exception handling. Configured with CMake for portable cross-platform builds.
                    </p>
                </li>

                <li className='project-list-item'>
                    <section className='project-image-container'>
                        <img src={premierLeagueLogo} alt='Premier League logo'></img>
                    </section>

                    <h3>Premier League Simulation Platform</h3>
                    <p>
                        A client–server league management system that simulates a full 20-team season with persistent standings. 
                        Developed with a JavaFX client and multi-threaded TCP server, featuring normalized MySQL schemas, full CRUD functionality, 
                        and a probabilistic match simulation engine. Architected using layered design principles and managed with Maven for scalable deployment.
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default ProjectsSection

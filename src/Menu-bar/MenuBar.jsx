import './MenuBar.css'
import MenuBarItem from './Menu-bar-link/MenuBarLink'
import CVdownloadButton from './CV-Download-Button/CVdownloadButton'

function MenuBar() {
    const items = [
        { title: "Home", sectionLink:"", imgSrc: "./src/assets/home-section-icon.png" },
        { title: "About", sectionLink:"", imgSrc: "./src/assets/about-section-icon.png" },
        { title: "Projects", sectionLink:"", imgSrc: "./src/assets/projects-section-icon.png" },
        { title: "Contact", sectionLink:"", imgSrc: "./src/assets/contact-section-icon.png" }
    ]

    return (
        
        <nav id='menu-bar'>
            {items.map((item, index) => (
                <MenuBarItem
                    key={index}
                    title={item.title}
                    sectionLink={item.sectionLink}
                    imgSrc={item.imgSrc}
                />
            ))}

            <CVdownloadButton/>     
        </nav>

        
    )
}

export default MenuBar

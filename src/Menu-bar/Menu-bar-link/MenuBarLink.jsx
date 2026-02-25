import './MenuBarLink.css'

function MenuBarItem(props) {
    return (
        <div id='menu-bar-item'>
            <img src={props.imgSrc} alt={props.title} />
            <a href={props.sectionLink}>{props.title}</a>
        </div>
    )
}

export default MenuBarItem

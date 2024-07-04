import './TechStackIconsContainer.css'
import githubIcon from '../../../assets/github.png'

function TechStackIconContainer(props)
{
    return (
        <div className='techstack_icons'>
        <img src={props.image} alt={props.alt} />
        <p>{props.title}</p>
    </div>
    )
}

export default TechStackIconContainer;
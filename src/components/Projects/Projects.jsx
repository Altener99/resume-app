import ProjectBox from './ProjectBox/ProjectBox'
import './Projects.css'

function Projects() {

    const projectData = [
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1a9oACOtjODT2YXFIUmYqJq6ovhEd8VF7Fg&s',
            title: 'Ecom Website',
            sentences: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet.'],        
             link: "https://www.projects.com/"   
            

        },

        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1a9oACOtjODT2YXFIUmYqJq6ovhEd8VF7Fg&s',
            title: 'Ecom Website',
            sentences: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet.'],        
             link: "https://www.projects.com/"   
            

        },

        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1a9oACOtjODT2YXFIUmYqJq6ovhEd8VF7Fg&s',
            title: 'Ecom Website',
            sentences: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet.'],        
             link: "https://www.projects.com/"   
            

        },

        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1a9oACOtjODT2YXFIUmYqJq6ovhEd8VF7Fg&s',
            title: 'Ecom Website',
            sentences: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eveniet.'],        
             link: "https://www.projects.com/"   
            

        }
    ]

  return (
    <div>
        <p className='projects_title'>Projects</p>

        <div className='projects_box_container'>

        {
            projectData.map((project, index) => (

                <ProjectBox key={project.title} 
                image={project.image} 
                title={project.title} 
                sentences={project.sentences} 
                link={project.link} />

            ) ) 
        }

        </div>
    </div>
  )
}

export default Projects
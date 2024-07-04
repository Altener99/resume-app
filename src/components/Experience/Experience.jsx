import './Experience.css';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import github from '../../assets/github.png';
function Experience() {

    const statements = [
        'I worked on the frontend of the project I worked on the frontend of the projectI worked on the frontend of the project',
        'I worked on the backend of the project I worked on the frontend of the projectI worked on the frontend of the projectI worked on the frontend of the project',
        'I worked on the database of the project'
    ];

    const iconImages = [github, github, github];

  return (

   
    <div className='experience_container'>
         
        <p className='experience_title'>Experience</p>

        <div className='experience_card_container'>
            <ExperienceCard 
                companyName = 'Abc Pvt Ltd'
                designation = 'SDE 3'
                statements = {statements}
                iconImages = {iconImages}
            />

            <ExperienceCard 
                companyName = 'Xyz Pvt Ltd'
                designation = 'SDE 2'
                statements = {statements}
                iconImages = {iconImages}
            />

            <ExperienceCard 
                companyName = 'Oruu Pvt Ltd'
                designation = 'SDE 1'
                statements = {statements}
                iconImages = {iconImages}
            />
        </div>

    </div>
  );
}

export default Experience;
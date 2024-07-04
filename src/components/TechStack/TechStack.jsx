import './TechStack.css'
import TechStackIconContainer from './TechStackIcons/TechStackIconContainer';
import github from '../../assets/github.png';

function TechStack()
{   
    
    const techstackrowone = [

        {
            iconName: 'github',
            iconImage: github,
            iconAltproperty: 'github',
        },

        {
            iconName: 'github',
            iconImage: github,
            iconAltproperty: 'github',
        },

        {
            iconName: 'github',
            iconImage: github,
            iconAltproperty: 'github',
        },

        {
            iconName: 'github',
            iconImage: github,
            iconAltproperty: 'github',
        },


    ]


    
    return (

        <div className='techstack_container'>

            <p className='techstack_title'>Tech Stack</p>

            <div  className='techstack_icon_container'>
               
            {
                techstackrowone.map(function(t,i){

                    return (

                        <TechStackIconContainer title = {t.iconName}
                        
                        image = {t.iconImage}
                        alt = {t.iconAltproperty}

                        />
                    )

                })
            }
               
            </div>

            <div  className='techstack_icon_container'>
               
               {
                   techstackrowone.map(function(t,i){
   
                       return (
   
                           <TechStackIconContainer title = {t.iconName}
                           
                           image = {t.iconImage}
                           alt = {t.iconAltproperty}
   
                           />
                       )
   
                   })
               }
                  
               </div>

        </div>

    )
}

export default TechStack;
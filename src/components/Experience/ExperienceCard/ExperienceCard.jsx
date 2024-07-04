import './ExperienceCard.css'

function ExperienceCard(

    {
        companyName,
        designation,
        statements,
        iconImages
    
    }

)
{
  

    return (

        <div className='ex_card_container'>
            <p className='ex_card_title'>
                {companyName}
            </p>

            <p className='ex_card_subtitle'>
                Designation: {designation}
            </p>

            {
                statements.map((item, index) => (
                    <p key={item} className='ex_card_sentence'>

                        {item}

                    </p>

                ))
            }

            <p className='ex_card_tech_used_title'>
                Tech Stack Used
            </p>

            <div className='ex_card_icon_images_container'>

            {
                iconImages.map((item, index) => (
                    <img key={item} src={item} alt='icon'/>
                ))
            }

            </div>
            
        </div>        

    )

}

export default ExperienceCard;  
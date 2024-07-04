import './HomePage.css';
import githubIcon from '../../assets/github.png';

function HomePage()
{
    return (

        <div className='HomePage_container'>
            
            <div className='homepage_left'>
                <p className='homepage_left_h1'>
                    <span className='red_color'>Hi, </span> my name is 
                </p>

                <p className='homepage_left_h2'>
                    Devanshu Dutta
                </p>

                <p className='homepage_left_h3'>
                    Developer at <span className='red_color'>Nobody's company</span>
                </p>

                <p className='homepage_left_description'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, minus distinctio obcaecati pariatur placeat incidunt necessitatibus quos enim laborum, suscipit sequi nisi, dicta commodi vero dolor alias reprehenderit amet maiores similique qui. Tempora provident vel nemo culpa rerum ratione optio!
                </p>
                 <div>
                <a href="#" target='_blank'>
                    <img src={githubIcon} alt="githubiconImage" className='homepage_logo' />
                </a>
            </div>

            <a href="itsnotwhatyouthing@gmail.com">
                <button className='homepage_left_button'>Get in Touch</button>
            </a>

            </div>
            
           

            <div className='homepage_right'>
                <img src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif" alt="GIF" />
            </div>

            

        </div>

    )
}

export default HomePage;
import './Navbar.css'

function Navbar()
{

    var name = 'AI';

    const navOptions = ['About', 'Tools', 'Experience', 'Projects', 'Resume'];

    function NavOptions(props)
    {
        return <p>{props.navItem}</p>
    }

    return (
        <div className='navbar_container'>
            <div className='navbar_left'>
                {name}
            </div>

            <div className='navbar_right'>
                {navOptions.map(function(n, i){

                    return <NavOptions key = {n}  navItem={n} />

                })}
            </div>
        </div>
    )
}

export default Navbar;
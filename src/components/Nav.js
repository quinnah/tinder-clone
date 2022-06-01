import whiteLogo from '../images/tinder-white-logo.png'
import colorLogo from '../images/tinder-color-png.png'

const Nav = ({minimal, authToken}) => {

    return (
        <nav> 
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo: whiteLogo}/>
            </div>

            {!authToken && !minimal && <button className="nav-button">Login</button>} 
        </nav>
    )
}

export default Nav
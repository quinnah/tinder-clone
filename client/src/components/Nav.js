import whiteLogo from '../images/tinder-white-logo.png'
import colorLogo from '../images/tinder-color-png.png'

const Nav = ({minimal, setShowModal, showModal, setIsSignUp }) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    const authToken = false
    return (
        <nav> 
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo: whiteLogo}/>
            </div>

            {!authToken && !minimal && 
            <button className="nav-button" 
                onClick={handleClick}>Login</button>} 
        </nav>
    )
}

export default Nav
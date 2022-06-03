import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const AuthModal = ({setShowModal, isSignUp}) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)

    let navigate = useNavigate()

    console.log(email, password, confirmPassword)

    const handleClick = () => {
        setShowModal(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault() // Prevent from refreshing page automatically
        try {
            if (isSignUp && (password !== confirmPassword)) {
                setError('Passwords need to match!')
                return
            }
            console.log('posting', email, password)
            const response = await axios.post('http://localhost:8000/signup', {email, password})
            
            const success = response.status === 201

            if (success) navigate('/onboarding')

        } catch (error) {
            console.log(error)
        }
    }

    return (
            <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}>ⓧ</div>
            <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
            <p>By clicking log in, you agree to our terms.</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {isSignUp && <input
                    type="password-check"
                    id="password-check"
                    name="password-check"
                    placeholder="confirm password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />}        
                <input className="secondary-button" type="submit"/>
                <p>{error}</p>      

            </form>
            <hr/>
            <h2>GET THE APP</h2>

           AUTH MODAL
            </div>
    )
}

export default AuthModal
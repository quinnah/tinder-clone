import Nav from '../components/Nav'
import AuthModal from '../components/AuthModal'
import { useState } from 'react'

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const authToken = false

    const handleClick = () => {
        console.log('clicked')
        setShowModal(true)
    }

    return (
        <>
        <Nav/>
        <div className="home">
            <h1>Swipe Right</h1>
            <button className="primary-button" onClick={handleClick}>
                {authToken ? 'Signout': 'Create Account'}
            </button>
        </div>
        </>
    )
}

export default Home
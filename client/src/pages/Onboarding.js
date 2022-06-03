import {useState} from 'react'
import Nav from '../components/Nav'

const Onboarding = () => {
    const [formData, setFormData] = useState({
        user_id: "",
        first_name: '',
        dob_day: '',
        dob_month: '',
        dob_year: '',
        show_gender: false,
        gender_identity: 'male',
        gender_interest: 'female',
        email: '',
        url: '',
        about: '',
        matches: []
    })

    const handleSubmit = () => {
        console.log('submitted')
    }

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        const name = e.target.name
        
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    console.log(formData)
    return (
        <>
            <Nav
                minimal={true}
                setShowModal={()=> {}} // set as empty function
                showModal={false}
                 />
            <div className="onboarding">
                <h2>CREATE ACCOUNT</h2>
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first_name">First Name</label>
                        <input
                            id="first_name"
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            required={true}
                            value={formData.first_name}
                            onChange={handleChange}
                        />

                        <label>Birthday</label>
                        <div className="multiple-input-container">
                            <input
                                id="dob_day"
                                type="number"
                                name="dob_day"
                                placeholder="DD"
                                required={true}
                                value={formData.dob_day}
                                onChange={handleChange}
                            />

                            <input
                                id="dob_month"
                                type="number"
                                name="dob_month"
                                placeholder="MM"
                                required={true}
                                value={formData.dob_month}
                                onChange={handleChange}
                            />

                            <input
                                id="dob_year"
                                type="number"
                                name="dob_year"
                                placeholder="YYYY"
                                required={true}
                                value={formData.dob_year}
                                onChange={handleChange}
                            />
                        </div>

                        <label>Gender</label>
                        <div className="multiple-input-container">
                            <input 
                                id="male-gender-identity"
                                type="radio"
                                name="gender_identity"
                                placeholder="DD"
                                value="male"
                                onChange={handleChange}
                                checked={formData.gender_identity === 'male'}
                            />
                            <label htmlFor="male-gender-identity">Male</label>
                            <input
                                id="female-gender-identity"
                                type="radio"
                                name="gender_identity"
                                placeholder="DD"
                                value="female"
                                onChange={handleChange}
                                checked={formData.gender_identity === 'female'}
                            />
                            <label htmlFor="female-gender-identity">Female</label>
                            <input
                                id="more-gender-identity"
                                type="radio"
                                name="gender_identity"
                                placeholder="DD"
                                value="more"
                                onChange={handleChange}
                                checked={formData.gender_identity === 'more'}
                            />
                            <label htmlFor="more-gender-identity">More</label>
                        </div>
                        <label htmlFor="show-gender">Show gender on my profile</label>
                        <input
                            id="show-gender"
                            type="checkbox"
                            name="show_gender"
                            onChange={handleChange}
                            checked={formData.show_gender}
                        />

                        <label>Show Me</label>
                        <div className="multiple-input-container">
                            <input
                                id="male-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="male"
                                onChange={handleChange}
                                checked={formData.gender_interest === 'male'}
                            />
                            <label htmlFor="male-gender-interest">Male</label>
                            <input
                                id="female-gender-interest"
                                type="radio"
                                name="gender_interest"
                                placeholder="DD"
                                value="female"
                                onChange={handleChange}
                                checked={formData.gender_interest === 'female'}
                            />
                            <label htmlFor="female-gender-interest">Female</label>
                            <input
                                id="everyone-gender-interest"
                                type="radio"
                                name="gender_interest"
                                placeholder="DD"
                                value="everyone"
                                onChange={handleChange}
                                checked={formData.gender_interest === 'everyone'}
                            />
                            <label htmlFor="everyone-gender-interest">Everyone</label>
                        </div>

                        <label htmlFor="about">About me</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            placeholder="I like photography"
                            value={formData.about}
                            onChange={handleChange}
                        />
                        <input type="submit"/>
                    </section>

                <section>
                    <label htmlFor="about">Profile</label>
                    <input 
                        type="url"
                        name="url"
                        required={true}
                        id="url"
                        onChange={handleChange}
                    />
                    <div className="photo-container">
                        <img src={formData.url} alt="profile pic preview"/>
                    </div>

                </section>
                </form>
            </div>
        </>
    )
}

export default Onboarding